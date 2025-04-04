import { useReadErc20BalanceOf } from '@/generated/wagmi/wagmi';
import { Account } from '@/types/types';
import { addressToEvm } from '@/utils/format';
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
    chainId: account.chainBid,
    address: addressToEvm(tokenAddress),
    args: [addressToEvm(account.address)],
    query: { enabled },
  });
};
