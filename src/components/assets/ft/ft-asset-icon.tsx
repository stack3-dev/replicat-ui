import TokenIcon from '@/components/common/token-icon';
import { useFtLogo } from '@/hooks/assets/ft/useFTLogo';
import { Asset } from '@/types/types';
import { ImageProps } from '@chakra-ui/react';

export const FtAssetIcon = ({
  asset,
  ...imageProps
}: {
  asset: Asset;
} & ImageProps) => {
  const { data: dataLogo } = useFtLogo({
    chainBid: asset.chainBid,
    address: asset.address,
  });

  return (
    <TokenIcon
      logo={dataLogo ?? undefined}
      chainBid={asset.chainBid}
      symbol={asset.metadata.symbol}
      name={asset.metadata.name}
      {...imageProps}
    />
  );
};
