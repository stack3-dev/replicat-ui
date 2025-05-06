import { useReadErc20BalanceOf } from '@/generated/wagmi/wagmi';
import { Account } from '@/types/types';
import { Hex } from 'viem';

export const useFTBalanceOf = ({
  account,
  tokenAddress,
  enabled = true,
}: {
  account: Account;
  tokenAddress: Hex;
  enabled?: boolean;
}) => {
  return useReadErc20BalanceOf({
    chainId: account.chain.id,
    address: tokenAddress,
    args: [account.address],
    query: { enabled },
  });
};
