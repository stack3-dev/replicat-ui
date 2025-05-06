import { http, createConfig } from 'wagmi';
import {
  chains,
  mainnet,
  sepolia,
  baseSepolia,
  optimismSepolia,
  bscTestnet,
  arbitrumSepolia,
  unichainSepolia,
} from './chains';

// export const connectors = [
//   injected(),
//   coinbaseWallet(),
//   walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
// ];

export const transports = {
  [mainnet.id]: http(
    `https://eth-mainnet.g.alchemy.com/v2/${
      import.meta.env.VITE_ALCHEMY_API_KEY
    }`
  ),
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
};

export const config = createConfig({
  // connectors,
  chains: chains,
  transports,
});
