import { useReadBridgeComputeReplicaAddress } from '@/generated/wagmi/wagmi';
import { Asset } from '@/types/types';
import { getBridgeAddress } from '@/utils/chains';
import { encodeAssetMetadata } from '@/utils/encoding';
import { safeAddress } from '@/utils/format';

export const useBridgeReplicaAddress = ({
  asset,
  chainBid,
  enabled = true,
}: {
  asset: Asset;
  chainBid: number;
  enabled?: boolean;
}) => {
  const query = useReadBridgeComputeReplicaAddress({
    chainId: chainBid,
    address: getBridgeAddress(chainBid),
    args: [
      {
        type_: asset.type,
        chainBid: BigInt(asset.chainBid),
        address_: asset.address,
        metadata: encodeAssetMetadata(asset),
      },
    ],
    query: { enabled },
  });

  return {
    ...query,
    data: query.data ? safeAddress(query.data) : undefined,
  };
};
