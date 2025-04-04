import { ReplicatChainBidsType, ReplicatChains } from '@/config/bridge';
import { ImageProps } from '@chakra-ui/react';
import IconImage from '../common/icon-image';
import { getChainName } from '@/utils/chains';

type ChainIconVariantProp = 'default' | 'ghost';

const ChainIconVariantColors: Record<ChainIconVariantProp, ImageProps> = {
  default: {
    bgColor: 'gray',
    borderRadius: 'md',
    border: '2px solid gray',
    p: 0.3,
  },
  ghost: {
    bgColor: 'transparent',
    borderRadius: 'none',
    border: 'none',
    p: 0.3,
  },
};

export default function ChainIcon(
  props: { chainBid: number; variant?: ChainIconVariantProp } & ImageProps
) {
  const { chainBid, variant = 'default', ...imageProps } = props;
  const icon = ReplicatChains[chainBid as ReplicatChainBidsType]?.icon;

  return (
    <>
      {icon ? (
        <IconImage
          src={icon}
          alt={`Chain ${chainBid}`}
          boxSize='25px'
          title={`${getChainName(chainBid)}`}
          {...ChainIconVariantColors[variant]}
          {...imageProps}
        />
      ) : null}
    </>
  );
}
