import { MetadataFT } from '@/types/types';
import { addressToEvm } from '@/utils/format';
import { useQuery } from '@tanstack/react-query';
import { erc20Abi, Hex } from 'viem';
import { useReadContracts } from 'wagmi';

export const useFtMetadata = ({
  chainBid,
  address,
  enabled = true,
}: {
  chainBid: number;
  address: Hex;
  enabled?: boolean;
}) => {
  const erc20Contract = {
    chainId: chainBid,
    address: addressToEvm(address),
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
    queryKey: ['fr-metadata', address, { chainBid }],
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
