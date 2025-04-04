import { useReadErc721SupportsInterface } from '@/generated/wagmi/wagmi';
import { Hex } from 'viem';

export const useAssetIsReplica = ({
  address,
  chainBid,
  enabled = true,
}: {
  address: Hex;
  chainBid: number;
  enabled?: boolean;
}) => {
  return useReadErc721SupportsInterface({
    address: address,
    args: ['0xcdf7653c'], // IReplica
    chainId: chainBid,
    query: {
      enabled,
    },
  });
};
