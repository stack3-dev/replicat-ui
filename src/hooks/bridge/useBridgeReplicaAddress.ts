import { Chain } from '@/config/chains';
import { useReadBridgeComputeReplicaAddress } from '@/generated/wagmi/wagmi';
import { Asset } from '@/types/types';
import { encodeAssetMetadata } from '@/utils/encoding';
import { safeAddress } from '@/utils/format';

export const useBridgeReplicaAddress = ({
  asset,
  chain,
  enabled = true,
}: {
  asset: Asset;
  chain: Chain;
  enabled?: boolean;
}) => {
  const query = useReadBridgeComputeReplicaAddress({
    chainId: chain.id,
    address: chain.bridgeAddress,
    args: [
      {
        type_: asset.type,
        chainBid: asset.chainBid,
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
