import { alchemy } from '@/utils/alchemy';
import { addressToEvm } from '@/utils/format';
import { useQuery } from '@tanstack/react-query';
import { Hex } from 'viem';

const fetchFtLogo = async ({
  chainBid,
  address,
}: {
  chainBid: number;
  address: Hex;
}): Promise<string | null> => {
  const sdk = alchemy(chainBid);
  const result = await sdk.core.getTokenMetadata(addressToEvm(address));
  return result?.logo ?? null;
};

export const useFtLogo = ({
  chainBid,
  address,
  enabled = true,
}: {
  chainBid: number;
  address: Hex;
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: ['ft-logo', address, { chainBid }],
    queryFn: async () => await fetchFtLogo({ chainBid, address }),
    enabled,
  });
};
