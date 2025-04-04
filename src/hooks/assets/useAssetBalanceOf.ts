import { Account, Asset } from '@/types/types';
import { useAssetAddress } from './useAssetAddress';
import { useFTBalanceOf } from './ft/useFTBalance';
import { zeroBytes32 } from '@/utils/constants';

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
    chainBid: account.chainBid,
    enabled,
  });

  const assetAddress = assetAddressQuery.data;

  return useFTBalanceOf({
    account: account,
    tokenAddress: assetAddress ?? zeroBytes32,
    enabled: enabled && !!assetAddressQuery,
  });
};
