import EthereumIcon from '../assets/network-icons/1.svg';
import OptimismIcon from '../assets/network-icons/10.svg';
import BaseIcon from '../assets/network-icons/8453.svg';
import BscIcon from '../assets/network-icons/56.svg';
import UnichainIcon from '../assets/network-icons/130.svg';
import ArbitrumIcon from '../assets/network-icons/42161.svg';
import {
  mainnet as WagmiMainnet,
  sepolia as WagmiSepolia,
  baseSepolia as WagmiBaseSepolia,
  optimismSepolia as WagmiOptimismSepolia,
  arbitrumSepolia as WagmiArbitrumSepolia,
  bscTestnet as WagmiBscTestnet,
  unichainSepolia as WagmiUnichainSepolia,
  Chain as WagmiChain,
} from 'wagmi/chains';
import { Network } from 'alchemy-sdk';
import { Hex } from 'viem';

export interface Chain extends WagmiChain {
  bridgeId: number;
  icon: string;
  bridgeAddress: Hex;
  isSuperchain: boolean;
  alchemyNetwork: Network;
}

export const mainnet: Chain = {
  ...WagmiMainnet,
  bridgeId: 2,
  icon: EthereumIcon,
  isSuperchain: true,
  bridgeAddress: '0x0000000000000000000000000000000000000000',
  alchemyNetwork: Network.ETH_MAINNET,
};

export const sepolia: Chain = {
  ...WagmiSepolia,
  bridgeId: 10002,
  icon: EthereumIcon,
  isSuperchain: true,
  bridgeAddress: '0xEa3c3dA21a8E24c10187d5690491aFBFDDe982c8',
  alchemyNetwork: Network.ETH_SEPOLIA,
};

export const baseSepolia: Chain = {
  ...WagmiBaseSepolia,
  bridgeId: 10004,
  icon: BaseIcon,
  isSuperchain: true,
  bridgeAddress: '0xEa3c3dA21a8E24c10187d5690491aFBFDDe982c8',
  alchemyNetwork: Network.BASE_SEPOLIA,
};

export const optimismSepolia: Chain = {
  ...WagmiOptimismSepolia,
  bridgeId: 10005,
  icon: OptimismIcon,
  bridgeAddress: '0xEa3c3dA21a8E24c10187d5690491aFBFDDe982c8',
  isSuperchain: true,
  alchemyNetwork: Network.OPT_SEPOLIA,
};

export const arbitrumSepolia: Chain = {
  ...WagmiArbitrumSepolia,
  bridgeId: 10003,
  icon: ArbitrumIcon,
  bridgeAddress: '0xEa3c3dA21a8E24c10187d5690491aFBFDDe982c8',
  isSuperchain: false,
  alchemyNetwork: Network.ARB_SEPOLIA,
};

export const bscTestnet: Chain = {
  ...WagmiBscTestnet,
  bridgeId: 4,
  icon: BscIcon,
  bridgeAddress: '0xEa3c3dA21a8E24c10187d5690491aFBFDDe982c8',
  isSuperchain: false,
  alchemyNetwork: Network.BNB_TESTNET,
};

export const unichainSepolia: Chain = {
  ...WagmiUnichainSepolia,
  bridgeId: 44,
  icon: UnichainIcon,
  bridgeAddress: '0xEa3c3dA21a8E24c10187d5690491aFBFDDe982c8',
  isSuperchain: true,
  alchemyNetwork: Network.UNICHAIN_SEPOLIA,
};

export const mainnets = [mainnet] as const;
export const testnets = [
  sepolia,
  baseSepolia,
  optimismSepolia,
  arbitrumSepolia,
  bscTestnet,
  unichainSepolia,
] as const;

export const isTestnet = import.meta.env.VITE_TESTNET === 'true';
export const chains = isTestnet ? testnets : mainnets;

export const chainById = (id?: number) => {
  return chains.find((chain) => chain.id === id);
};

export const chainByBid = (bid?: number) => {
  return chains.find((chain) => chain.bridgeId === bid);
};
