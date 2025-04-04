import { Hex } from 'viem';
import { useBridgeReplicas } from './useBridgeReplicas';

export const useBridgeReplicaByHash = ({
  assetHash,
  chainBid,
  enabled = true,
}: {
  assetHash: Hex;
  chainBid: number;
  enabled?: boolean;
}) => {
  const replicasQuery = useBridgeReplicas({
    chainBid,
    enabled,
  });

  return {
    ...replicasQuery,
    data: replicasQuery.data?.find(
      (replica) => replica.assetHash === assetHash
    ),
  };
};
