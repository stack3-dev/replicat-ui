import { Asset, AssetType } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { useBridgeReplicaAddress } from '../bridge/useBridgeReplicaAddress';

export const useAssetAddress = ({
  asset,
  chainBid,
  enabled = true,
}: {
  asset: Asset;
  chainBid: number;
  enabled: boolean;
}) => {
  const useReplicaAddress =
    asset.chainBid !== chainBid &&
    [AssetType.FT, AssetType.NFT].includes(asset.type);

  const queryReplicaAddress = useBridgeReplicaAddress({
    chainBid,
    asset,
    enabled: enabled && useReplicaAddress,
  });

  const replicaAddress = queryReplicaAddress.data;

  const query = useQuery({
    queryKey: ['asset-address', asset.address, { chainBid }],
    queryFn: () => {
      return useReplicaAddress ? replicaAddress! : asset.address;
    },
    enabled: enabled && (!useReplicaAddress || !!replicaAddress),
  });

  return query;
};
