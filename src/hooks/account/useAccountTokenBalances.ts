import { Hex } from 'viem';
import { alchemy } from '../../utils/alchemy';
import { useQueries, useQuery } from '@tanstack/react-query';
import { Chain, chains } from '@/config/chains';

const fetchAccountTokenBalances = async ({
  address,
  chain,
}: {
  address: Hex;
  chain: Chain;
}) => {
  const sdk = alchemy(chain);
  const result = await sdk.core.getTokenBalances(address);

  return {
    ...result,
    chain,
  };
};

const query = ({
  address,
  chain,
  enabled = true,
}: {
  address: Hex;
  chain: Chain;
  enabled: boolean;
}) => ({
  queryKey: ['account-token-balances', address, { chainId: chain.id }],
  queryFn: () => fetchAccountTokenBalances({ address, chain }),
  enabled,
});

export const useAccountTokenBalances = ({
  address,
  chain,
  enabled = true,
}: {
  address: Hex;
  chain: Chain;
  enabled?: boolean;
}) => {
  return useQuery({
    ...query({ address, chain, enabled }),
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
    queries: chains.map((chain) => {
      return query({ address, chain, enabled });
    }),
  });
};
