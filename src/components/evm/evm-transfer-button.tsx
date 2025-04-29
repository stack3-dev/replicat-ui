import { Transfer, TransferEvmPermit, TransferParamsFT } from '@/types/types';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { encodeTransferParamsFT, hashAsset } from '@/utils/encoding';
import { LAYERZERO } from '@/config/messengers';
import { Hex, TransactionReceipt } from 'viem';
import { ButtonProps } from '@chakra-ui/react';
import { bridgeAbi } from '@/generated/wagmi/wagmi';
import { addressToEvm } from '@/utils/format';
import { useBridgeTransferQuote } from '@/hooks/bridge/useBridgeTransferQuote';
import { chains } from '@/config/chains';

export default function EvmTransferButton(
  props: {
    transfer: Transfer;
    permit?: TransferEvmPermit;
    onTransactionSuccess: (receipt: TransactionReceipt) => void;
  } & ButtonProps
) {
  const { transfer, permit, onTransactionSuccess, ...buttonProps } = props;
  const chainBid = transfer.from.chainBid;
  const bridgeAddress = chains[chainBid].bridgeAddress as Hex;

  const transferData = {
    assetType: transfer.asset.type,
    assetHash: hashAsset(transfer.asset),
    from: addressToEvm(transfer.from.address),
    to: transfer.to.address,
    chainBid: BigInt(transfer.to.chainBid),
    params: encodeTransferParamsFT(transfer.params as TransferParamsFT),
    nonce: transfer.nonce,
  };

  const { data: dataQuote, isPending: isPendingQuote } = useBridgeTransferQuote(
    {
      transfer,
    }
  );

  return (
    <EvmWriteContractButton
      params={{
        abi: bridgeAbi,
        address: bridgeAddress,
        chainId: chainBid,
        functionName: permit ? 'transferWithPermit' : 'transfer',
        value: dataQuote,
        args: permit
          ? [transferData, '0x', LAYERZERO, '0x', permit]
          : [transferData, '0x', LAYERZERO, '0x'],
      }}
      onTransactionSuccess={onTransactionSuccess}
      disabled={isPendingQuote}
      {...buttonProps}
    />
  );
}
