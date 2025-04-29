import {
  MetadataFT,
  Transfer,
  TransferEvmPermit,
  TransferParamsFT,
} from '@/types/types';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { TransactionReceipt } from 'viem';
import { Button, ButtonProps } from '@chakra-ui/react';
import {
  erc20Abi,
  useReadErc20Allowance,
  useReadErc20PermitEip712Domain,
} from '@/generated/wagmi/wagmi';
import { amountToDecimals } from '@/utils/math';
import EvmErc20PermitButton from './evm-erc20-permit-button';
import { useEffect, useState } from 'react';
import EvmTransferButton from './evm-transfer-button';
import { toaster } from '../ui/toaster';
import { addressToEvm } from '@/utils/format';
import { zeroBytes32 } from '@/utils/constants';
import { useBridgeReplicaAddress } from '@/hooks/bridge/useBridgeReplicaAddress';

export default function EvmTransferWithAllowanceOrPermitButton(
  props: {
    transfer: Transfer;
    onTransactionSuccess: (receipt: TransactionReceipt) => void;
  } & ButtonProps
) {
  const [permit, setPermit] = useState<TransferEvmPermit>();
  const { transfer, onTransactionSuccess, ...buttonProps } = props;
  const chainBid = transfer.from.chainBid;
  const assetEvmAddress = addressToEvm(transfer.asset.address);
  const params = transfer.params as TransferParamsFT;
  const metadata = transfer.asset.metadata as MetadataFT;
  const permitDeadline = BigInt(Math.floor(Date.now() / 1000) + 3600);
  const amountLD = amountToDecimals(
    params.amount,
    params.decimals,
    metadata.decimals!
  )[0];

  const {
    data: dataReplicaAddress,
    isPending: isPendingReplicaAddress,
    error: errorReplicaAddress,
  } = useBridgeReplicaAddress({
    chainBid: chainBid,
    asset: transfer.asset,
  });

  const {
    data: dataAllowance,
    isPending: isPendingAllowance,
    error: errorAllowance,
    refetch: refetchAllowance,
  } = useReadErc20Allowance({
    chainId: chainBid,
    address: assetEvmAddress,
    args: [
      addressToEvm(transfer.from.address),
      addressToEvm(dataReplicaAddress ?? zeroBytes32),
    ],
  });

  const { data: dataDomain, isPending: isPendingDomain } =
    useReadErc20PermitEip712Domain({
      chainId: chainBid,
      address: addressToEvm(transfer.asset.address),
    });

  const isPermit = dataDomain !== undefined; // consider permit if domain is available
  const isAllowed = !!dataAllowance && dataAllowance >= amountLD; // allowance is enough
  const needPermit = isPermit && !isAllowed && !permit; // need permit if allowance is not enough
  const needApprove = !isPermit && !isAllowed; // need approve if allowance is not enough and no permit

  const isPending =
    isPendingReplicaAddress || isPendingAllowance || isPendingDomain;

  useEffect(() => {
    const error = errorReplicaAddress ?? errorAllowance;
    if (error) {
      console.error(error);
      toaster.create({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        type: 'error',
      });
    }
  }, [errorReplicaAddress, errorAllowance]);

  return (
    <>
      {isPending ? (
        <Button {...buttonProps} loading />
      ) : needPermit ? (
        <>
          <EvmErc20PermitButton
            token={addressToEvm(transfer.asset.address)}
            amount={amountLD}
            deadline={permitDeadline}
            owner={addressToEvm(transfer.from.address)}
            spender={addressToEvm(dataReplicaAddress ?? zeroBytes32)}
            chainId={chainBid}
            onChange={(sig) => {
              setPermit({
                token: addressToEvm(transfer.asset.address),
                value: amountLD,
                deadline: permitDeadline,
                r: sig.r,
                s: sig.s,
                v: sig.v ?? 0n,
              });
            }}
            disabled={!!permit}
          >
            Sign Permit
          </EvmErc20PermitButton>
        </>
      ) : needApprove ? (
        <EvmWriteContractButton
          params={{
            abi: erc20Abi,
            chainId: chainBid,
            address: addressToEvm(transfer.asset.address),
            functionName: 'approve',
            args: [addressToEvm(dataReplicaAddress ?? zeroBytes32), amountLD],
          }}
          onTransactionSuccess={() => refetchAllowance()}
        >
          Approve
        </EvmWriteContractButton>
      ) : (
        <EvmTransferButton
          transfer={transfer}
          permit={permit}
          onTransactionSuccess={onTransactionSuccess}
          {...buttonProps}
        >
          Transfer
        </EvmTransferButton>
      )}
    </>
  );
}
