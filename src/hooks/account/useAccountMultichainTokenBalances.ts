import { Hex } from 'viem';
import { alchemy } from '../../utils/alchemy';
import { useQueries } from '@tanstack/react-query';
import { TokenBalancesResponseErc20 } from 'alchemy-sdk';
import { chainBids } from '@/config/chains';

interface MultiChainTokenBalancesResponse extends TokenBalancesResponseErc20 {
  chainBid: number;
}

export const useAccountMultichainTokenBalances = ({
  address,
}: {
  address: Hex;
}) => {
  const tokenBalances = async (
    chainBid: number
  ): Promise<MultiChainTokenBalancesResponse> => {
    const sdk = alchemy(chainBid);
    return {
      chainBid,
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
    queries: chainBids.map((chainBid) => {
      return {
        queryKey: ['account-token-balances', address, { chainBid }],
        queryFn: async () => tokenBalances(chainBid),
      };
    }),
  });
};
