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

const isTestnet = import.meta.env.DEV;

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
