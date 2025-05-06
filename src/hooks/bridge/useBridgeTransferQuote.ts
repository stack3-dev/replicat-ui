import { useReadBridgeQuoteTransfer } from '@/generated/wagmi/wagmi';
import { Transfer } from '@/types/types';

export const useBridgeTransferQuote = ({
  transfer,
  enabled = true,
}: {
  transfer: Transfer;
  enabled?: boolean;
}) => {
  return useReadBridgeQuoteTransfer({
    chainId: transfer.from.chain.id,
    address: transfer.from.chain.bridgeAddress,
    args: [transfer.to.chain.bridgeId],
    query: {
      enabled,
    },
  });
};
