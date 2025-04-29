import { Alchemy } from 'alchemy-sdk';
import { isChainBidValid } from './chains';
import { chains } from '@/config/chains';

// React hook that returns one or multiple alchemy-sdk instances for given chain ids
export const alchemy = (chainBid: number) => {
  if (isChainBidValid(chainBid)) {
    return new Alchemy({
      apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
      network: chains[chainBid].alchemyNetwork,
    });
  } else {
    throw new Error(`Invalid chainBid: ${chainBid}`);
  }
};
