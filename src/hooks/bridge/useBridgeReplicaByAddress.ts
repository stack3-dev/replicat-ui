import { Hex } from 'viem';
import { useBridgeReplicas } from './useBridgeReplicas';

export const useBridgeReplicaByAddress = ({
  address,
  chainBid,
  enabled = true,
}: {
  address: Hex;
  chainBid: number;
  enabled?: boolean;
}) => {
  const replicasQuery = useBridgeReplicas({
    chainBid,
    enabled,
  });

  return {
    ...replicasQuery,
    data: replicasQuery.data?.find((replica) => replica.address === address),
  };
};
