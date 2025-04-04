import { Badge, Box, Float, Image } from '@chakra-ui/react';
import { useTheme } from 'next-themes';

export const HomeLogo = () => {
  const theme = useTheme();

  const isTestnet = import.meta.env.DEV;
  return (
    <Box position='relative'>
      <Image
        src={theme.theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
        alt='Home'
        height='60px'
        p='1'
      />
      {isTestnet && (
        <Float placement={'bottom-end'}>
          <Badge variant={'solid'} ml='4'>
            testnet
          </Badge>
        </Float>
      )}
    </Box>
  );
};
