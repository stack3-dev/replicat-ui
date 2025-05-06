import { Chain } from '@/config/chains';
import { MetadataFT } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { erc20Abi, Hex } from 'viem';
import { useReadContracts } from 'wagmi';

export const useFtMetadata = ({
  chain,
  address,
  enabled = true,
}: {
  chain: Chain | undefined;
  address: Hex;
  enabled?: boolean;
}) => {
  const chainId = chain?.id ?? 0;

  const erc20Contract = {
    chainId: chainId,
    address: address,
    abi: erc20Abi,
  };
  const readsQuery = useReadContracts({
    contracts: [
      {
        ...erc20Contract,
        functionName: 'name',
      },
      {
        ...erc20Contract,
        functionName: 'symbol',
      },
      {
        ...erc20Contract,
        functionName: 'decimals',
      },
    ],
    query: { enabled },
  });

  return useQuery({
    queryKey: ['fr-metadata', address, { chainId: chainId }],
    queryFn: () => {
      const name = readsQuery.data?.[0].result;
      const symbol = readsQuery.data?.[1].result;
      const decimals = readsQuery.data?.[2].result;
      return symbol && decimals
        ? ({
            name,
            symbol,
            decimals,
            logo: null,
          } as MetadataFT)
        : null;
    },
    // The query will not run if the contract reads are still loading
    enabled: enabled && !!readsQuery.data,
  });
};
