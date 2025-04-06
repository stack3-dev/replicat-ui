import { Badge, Box, Float, Image } from '@chakra-ui/react';
import { useTheme } from 'next-themes';

export const HomeLogo = () => {
  const theme = useTheme();

  const isTestnet = import.meta.env.DEV;
  return (
    <Box position='relative'>
      <Image
        src={theme.theme === 'light' ? '/logo-light.png' : '/logo-dark.png'}
        alt='Home'
        height='60px'
        p='1'
      />
      {isTestnet && (
        <Float placement={'bottom-start'}>
          <Badge variant={'solid'} ml='16'>
            testnet
          </Badge>
        </Float>
      )}
    </Box>
  );
};
