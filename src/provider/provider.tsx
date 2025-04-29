import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { WagmiProvider } from 'wagmi';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { config } from '../config/wagmi';

const queryClient = new QueryClient();

export default function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <NuqsAdapter>
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              {props.children}
            </QueryClientProvider>
          </WagmiProvider>
        </NuqsAdapter>
      </ThemeProvider>
    </ChakraProvider>
  );
}
