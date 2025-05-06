import { Transfer, TransferEvmPermit, TransferParamsFT } from '@/types/types';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { encodeTransferParamsFT, hashAsset } from '@/utils/encoding';
import { TransactionReceipt } from 'viem';
import { ButtonProps } from '@chakra-ui/react';
import { bridgeAbi } from '@/generated/wagmi/wagmi';
import { useBridgeTransferQuote } from '@/hooks/bridge/useBridgeTransferQuote';

export default function EvmTransferButton(
  props: {
    transfer: Transfer;
    permit?: TransferEvmPermit;
    onTransactionSuccess: (receipt: TransactionReceipt) => void;
  } & ButtonProps
) {
  const { transfer, permit, onTransactionSuccess, ...buttonProps } = props;
  const chain = transfer.from.chain;

  const transferData = {
    assetType: transfer.asset.type,
    assetHash: hashAsset(transfer.asset),
    from: transfer.from.address,
    to: transfer.to.address,
    chainBid: transfer.to.chain.bridgeId,
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
        address: chain.bridgeAddress,
        chainId: chain.id,
        functionName: permit ? 'transferWithPermit' : 'transfer',
        value: dataQuote,
        args: permit ? [transferData, '0x', permit] : [transferData, '0x'],
      }}
      onTransactionSuccess={onTransactionSuccess}
      disabled={isPendingQuote}
      {...buttonProps}
    />
  );
}
