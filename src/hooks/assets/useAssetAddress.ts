import { Asset, AssetType } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { useBridgeReplicaAddress } from '../bridge/useBridgeReplicaAddress';
import { Chain } from '@/config/chains';

export const useAssetAddress = ({
  asset,
  chain,
  enabled = true,
}: {
  asset: Asset;
  chain: Chain;
  enabled: boolean;
}) => {
  const useReplicaAddress =
    asset.chainBid !== chain.bridgeId &&
    [AssetType.FT, AssetType.NFT].includes(asset.type);

  const queryReplicaAddress = useBridgeReplicaAddress({
    chain,
    asset,
    enabled: enabled && useReplicaAddress,
  });

  const replicaAddress = queryReplicaAddress.data;

  const query = useQuery({
    queryKey: ['asset-address', asset.address, { chainId: chain.id }],
    queryFn: () => {
      return useReplicaAddress ? replicaAddress! : asset.address;
    },
    enabled: enabled && (!useReplicaAddress || !!replicaAddress),
  });

  return query;
};
