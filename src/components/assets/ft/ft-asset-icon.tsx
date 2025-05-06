import TokenIcon from '@/components/common/token-icon';
import { chainByBid } from '@/config/chains';
import { useFtLogo } from '@/hooks/assets/ft/useFTLogo';
import { Asset } from '@/types/types';
import { ImageProps } from '@chakra-ui/react';

export const FtAssetIcon = ({
  asset,
  ...imageProps
}: {
  asset: Asset;
} & ImageProps) => {
  const chain = chainByBid(asset.chainBid);

  const { data: dataLogo } = useFtLogo({
    chain: chain!,
    address: asset.address,
  });

  return (
    <TokenIcon
      logo={dataLogo ?? undefined}
      chain={chain}
      symbol={asset.metadata.symbol}
      name={asset.metadata.name}
      {...imageProps}
    />
  );
};
