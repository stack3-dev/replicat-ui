import { Hex } from 'viem';
import { useBridgeReplicas } from './useBridgeReplicas';
import { Chain } from '@/config/chains';

export const useBridgeReplicaByAddress = ({
  address,
  chain,
  enabled = true,
}: {
  address: Hex;
  chain: Chain;
  enabled?: boolean;
}) => {
  const replicasQuery = useBridgeReplicas({
    chain,
    enabled,
  });

  return {
    ...replicasQuery,
    data: replicasQuery.data?.find((replica) => replica.address === address),
  };
};
