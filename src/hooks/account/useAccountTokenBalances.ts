import { Hex } from 'viem';
import { alchemy } from '../../utils/alchemy';
import { useQueries, useQuery } from '@tanstack/react-query';
import { ReplicatChainBids } from '@/config/bridge';

const fetchAccountTokenBalances = async ({
  address,
  chainBid,
}: {
  address: Hex;
  chainBid: number;
}) => {
  const sdk = alchemy(chainBid);
  const result = await sdk.core.getTokenBalances(address);
  return {
    ...result,
    chainBid,
  };
};

const query = ({
  address,
  chainBid,
  enabled = true,
}: {
  address: Hex;
  chainBid: number;
  enabled: boolean;
}) => ({
  queryKey: ['account-token-balances', address, { chainBid }],
  queryFn: () => fetchAccountTokenBalances({ address, chainBid }),
  enabled,
});

export const useAccountTokenBalances = ({
  address,
  chainBid,
  enabled = true,
}: {
  address: Hex;
  chainBid: number;
  enabled?: boolean;
}) => {
  return useQuery({
    ...query({ address, chainBid, enabled }),
    enabled: enabled,
  });
};

export const useAccountTokenBalancesAll = ({
  address,
  enabled = true,
}: {
  address: Hex;
  enabled: boolean;
}) => {
  return useQueries({
    queries: ReplicatChainBids.map((chainBid) => {
      return query({ address, chainBid, enabled });
    }),
  });
};
