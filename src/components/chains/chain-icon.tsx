import { ImageProps } from '@chakra-ui/react';
import IconImage from '../common/icon-image';
import { Chain } from '@/config/chains';

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
  props: { chain: Chain; variant?: ChainIconVariantProp } & ImageProps
) {
  const { chain, variant = 'default', ...imageProps } = props;
  const icon = chain.icon;

  return (
    <>
      {icon ? (
        <IconImage
          src={icon}
          alt={`${chain.name}`}
          boxSize='25px'
          title={`${chain.name}`}
          {...ChainIconVariantColors[variant]}
          {...imageProps}
        />
      ) : null}
    </>
  );
}
