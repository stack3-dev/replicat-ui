import { LAYERZERO } from '@/config/messengers';
import { useReadBridgeQuoteTransfer } from '@/generated/wagmi/wagmi';
import { Transfer, TransferParamsFT } from '@/types/types';
import { getBridgeAddress } from '@/utils/chains';
import { encodeTransferParamsFT, hashAsset } from '@/utils/encoding';
import { addressToEvm } from '@/utils/format';

export const useBridgeTransferQuote = ({
  transfer,
  enabled = true,
}: {
  transfer: Transfer;
  enabled?: boolean;
}) => {
  const bridgeAddress = getBridgeAddress(transfer.from.chainBid);

  const transferData = {
    assetType: transfer.asset.type,
    assetHash: hashAsset(transfer.asset),
    from: addressToEvm(transfer.from.address),
    to: transfer.to.address,
    chainBid: BigInt(transfer.to.chainBid),
    params: encodeTransferParamsFT(transfer.params as TransferParamsFT),
    nonce: transfer.nonce,
  };

  const query = useReadBridgeQuoteTransfer({
    chainId: transfer.to.chainBid,
    address: bridgeAddress,
    args: [transferData, LAYERZERO, '0x'],
    query: {
      enabled,
    },
  });

  console.log(transferData);
  console.log('quote: ', query.data);
  console.log('quote error: ', query.error);

  return query;
};
