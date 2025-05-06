import { Chain, chains, isTestnet } from '@/config/chains';
import { Hex } from 'viem';

export const getChainFromAlchemyName = (alchemyName: string): Chain => {
  const chain = chains.find((chain) => chain.alchemyNetwork === alchemyName);
  if (chain === undefined) {
    throw new Error(`Unexpected alchemy network name: ${alchemyName}`);
  }
  return chain;
};

export const isChainSupported = (chainId?: number): boolean => {
  return chains.some((chain) => chain.id === chainId);
};

export const getExplorerTransactionLink = (chain: Chain, hash: Hex): string => {
  return `${chain.blockExplorers?.default.url}/tx/${hash}`;
};

export const getExplorerAddressLink = (chain: Chain, address: Hex): string => {
  const formattedAddress = address;
  return `${chain.blockExplorers?.default.url}/address/${formattedAddress}`;
};

export const getExplorerTokenLink = (chain: Chain, address: Hex): string => {
  const formattedAddress = address;
  return `${chain.blockExplorers?.default.url}/token/${formattedAddress}`;
};

export const getWormholeTransactionLink = (hash: Hex): string => {
  return `https://wormholescan.io/#/tx/${hash}${
    isTestnet ? '?network=Testnet' : ''
  }`;
};
