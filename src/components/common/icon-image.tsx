import { Image, ImageProps } from '@chakra-ui/react';

export default function IconImage(props: ImageProps) {
  return <Image borderRadius='full' fit='contain' boxSize='30px' {...props} />;
}
