import { Chain } from '@/config/chains';
import { alchemy } from '@/utils/alchemy';
import { useQuery } from '@tanstack/react-query';
import { Hex } from 'viem';

const fetchFtLogo = async ({
  chain,
  address,
}: {
  chain: Chain;
  address: Hex;
}): Promise<string | null> => {
  const sdk = alchemy(chain);
  const result = await sdk.core.getTokenMetadata(address);
  return result?.logo ?? null;
};

export const useFtLogo = ({
  chain,
  address,
  enabled = true,
}: {
  chain: Chain;
  address: Hex;
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: ['ft-logo', address, { chainId: chain.id }],
    queryFn: async () => await fetchFtLogo({ chain, address }),
    enabled,
  });
};
