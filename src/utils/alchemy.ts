import { Alchemy } from 'alchemy-sdk';
import { Chain } from '@/config/chains';

export const alchemy = (chain: Chain) => {
  return new Alchemy({
    apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
    network: chain.alchemyNetwork,
  });
};
