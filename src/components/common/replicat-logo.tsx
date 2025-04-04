import { ImageProps } from '@chakra-ui/react';
import IconImage from './icon-image';

export const ReplicaTLogo = (imageProps: ImageProps) => {
  return (
    <IconImage
      bgColor={'gray'}
      p={1}
      fit={'contain'}
      borderRadius={'sm'}
      boxSize={'20px'}
      src={'/logo-no-text.png'}
      alt={'replicaT'}
      {...imageProps}
    />
  );
};
