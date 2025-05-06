import { Hex } from 'viem';
import { alchemy } from '../../utils/alchemy';
import { useQueries } from '@tanstack/react-query';
import { TokenBalancesResponseErc20 } from 'alchemy-sdk';
import { Chain, chains } from '@/config/chains';

interface MultiChainTokenBalancesResponse extends TokenBalancesResponseErc20 {
  chain: Chain;
}

export const useAccountMultichainTokenBalances = ({
  address,
}: {
  address: Hex;
}) => {
  const tokenBalances = async (
    chain: Chain
  ): Promise<MultiChainTokenBalancesResponse> => {
    const sdk = alchemy(chain);
    return {
      chain,
      ...(await sdk.core.getTokenBalances(address)),
    };
  };

  return useQueries({
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isPending: results.some((result) => result.isPending),
        error: results.find((result) => result.error)?.error,
      };
    },
    queries: chains.map((chain) => {
      return {
        queryKey: ['account-token-balances', address, { chainId: chain.id }],
        queryFn: async () => tokenBalances(chain),
      };
    }),
  });
};
