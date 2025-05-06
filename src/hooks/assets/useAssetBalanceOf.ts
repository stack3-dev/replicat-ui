import { Account, Asset } from '@/types/types';
import { useAssetAddress } from './useAssetAddress';
import { useFTBalanceOf } from './ft/useFTBalance';
import { zeroAddress } from 'viem';

export const useAssetBalanceOf = ({
  asset,
  account,
  enabled = true,
}: {
  asset: Asset;
  account: Account;
  enabled: boolean;
}) => {
  const assetAddressQuery = useAssetAddress({
    asset,
    chain: account.chain,
    enabled,
  });

  const assetAddress = assetAddressQuery.data;

  return useFTBalanceOf({
    account: account,
    tokenAddress: assetAddress ?? zeroAddress,
    enabled: enabled && !!assetAddressQuery,
  });
};
