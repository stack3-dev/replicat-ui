import { Box, Circle, Float, ImageProps } from '@chakra-ui/react';
import IconImage from './icon-image';
import ChainIcon from '../chains/chain-icon';

export default function TokenIcon(
  props: {
    logo?: string;
    symbol?: string;
    name?: string;
    chainBid?: number;
    noChainIcon?: boolean;
  } & ImageProps
) {
  const { logo, name, symbol, chainBid, noChainIcon, ...imageProps } = props;

  const networkIcon = (chainBid?: number) => {
    return !noChainIcon && chainBid ? (
      <Float placement={'bottom-end'}>
        <ChainIcon chainBid={chainBid} boxSize='20px' />
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
      {networkIcon(chainBid)}
    </Box>
  ) : (
    <Circle
      bgColor='gray'
      w='30px'
      h='30px'
      {...imageProps}
      position='relative'
    >
      {networkIcon(chainBid)}
    </Circle>
  );
}
