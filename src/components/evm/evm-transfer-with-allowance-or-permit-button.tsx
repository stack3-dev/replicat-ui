import {
  MetadataFT,
  Transfer,
  TransferEvmPermit,
  TransferParamsFT,
} from '@/types/types';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { TransactionReceipt, zeroAddress } from 'viem';
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
import { useBridgeReplicaAddress } from '@/hooks/bridge/useBridgeReplicaAddress';

export default function EvmTransferWithAllowanceOrPermitButton(
  props: {
    transfer: Transfer;
    onTransactionSuccess: (receipt: TransactionReceipt) => void;
  } & ButtonProps
) {
  const [permit, setPermit] = useState<TransferEvmPermit>();
  const { transfer, onTransactionSuccess, ...buttonProps } = props;
  const chain = transfer.from.chain;
  const assetEvmAddress = transfer.asset.address;
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
    chain: chain,
    asset: transfer.asset,
  });

  const {
    data: dataAllowance,
    isPending: isPendingAllowance,
    error: errorAllowance,
    refetch: refetchAllowance,
  } = useReadErc20Allowance({
    chainId: chain.id,
    address: assetEvmAddress,
    args: [transfer.from.address, dataReplicaAddress ?? zeroAddress],
  });

  const { data: dataDomain, isPending: isPendingDomain } =
    useReadErc20PermitEip712Domain({
      chainId: chain.id,
      address: transfer.asset.address,
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
            token={transfer.asset.address}
            amount={amountLD}
            deadline={permitDeadline}
            owner={transfer.from.address}
            spender={dataReplicaAddress ?? zeroAddress}
            chainId={chain.id}
            onChange={(sig) => {
              setPermit({
                token: transfer.asset.address,
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
            chainId: chain.id,
            address: transfer.asset.address,
            functionName: 'approve',
            args: [dataReplicaAddress ?? zeroAddress, amountLD],
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
