import { Hex } from 'viem';
import { useReadIrerc20SupportsInterface } from '@/generated/wagmi/wagmi';

export const useAssetIsReplica = ({
  address,
  chainBid,
  enabled = true,
}: {
  address: Hex;
  chainBid: number;
  enabled?: boolean;
}) => {
  return useReadIrerc20SupportsInterface({
    address: address,
    args: ['0xcdf7653c'], // IReplica
    chainId: chainBid,
    query: {
      enabled,
    },
  });
};
