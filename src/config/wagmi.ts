import { http, createConfig } from 'wagmi';
import {
  arbitrumSepolia,
  base,
  baseSepolia,
  bscTestnet,
  Chain,
  mainnet,
  optimism,
  optimismSepolia,
  sepolia,
  soneiumMinato,
  unichainSepolia,
} from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';
import { isTestnet } from './chains';

export const chains: [Chain, ...Chain[]] = isTestnet
  ? [
      sepolia,
      baseSepolia,
      optimismSepolia,
      bscTestnet,
      soneiumMinato,
      arbitrumSepolia,
      unichainSepolia,
    ]
  : [mainnet, base, optimism];

export const config = createConfig({
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  chains: chains,
  transports: {
    [sepolia.id]: http(
      `https://eth-sepolia.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`
    ),
    [baseSepolia.id]: http(
      `https://base-sepolia.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`
    ),
    [optimismSepolia.id]: http(
      `https://opt-sepolia.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`
    ),
    [bscTestnet.id]: http(
      `https://bnb-testnet.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`
    ),
    [soneiumMinato.id]: http(
      `https://soneium-minato.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`
    ),
    [arbitrumSepolia.id]: http(
      `https://arb-sepolia.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`
    ),
    [unichainSepolia.id]: http(
      `https://unichain-sepolia.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_API_KEY
      }`
    ),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
