import { Box, Circle, Float, ImageProps } from '@chakra-ui/react';
import IconImage from './icon-image';
import ChainIcon from '../chains/chain-icon';
import { Chain } from '@/config/chains';

export default function TokenIcon(
  props: {
    logo?: string;
    symbol?: string;
    name?: string;
    chain?: Chain;
    noChainIcon?: boolean;
  } & ImageProps
) {
  const { logo, name, symbol, chain, noChainIcon, ...imageProps } = props;

  const networkIcon = (chain?: Chain) => {
    return !noChainIcon && chain ? (
      <Float placement={'bottom-end'}>
        <ChainIcon chain={chain} boxSize='20px' />
      </Float>
    ) : null;
  };

  return logo ? (
    <Box position='relative'>
      <IconImage
        bgColor='gray'
        src={logo}
        alt={symbol}
        title={name}
        {...imageProps}
      />
      {networkIcon(chain)}
    </Box>
  ) : (
    <Circle
      bgColor='gray'
      w='30px'
      h='30px'
      {...imageProps}
      position='relative'
    >
      {networkIcon(chain)}
    </Circle>
  );
}
