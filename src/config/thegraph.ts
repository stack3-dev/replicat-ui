import { ReplicatEvmChainBidsType } from './bridge';
import {
  ARBITRUM_SEPOLIA,
  BASE_SEPOLIA,
  BSC_TESTNET,
  OPTIMISM_SEPOLIA,
  SEPOLIA,
  SONEIUM_MINATO,
  UNICHAIN_SEPOLIA,
} from './chains';

const chainBidToGraphId: Record<ReplicatEvmChainBidsType, string> = {
  [SEPOLIA]: 'replicat-ethereum-sepolia',
  [BASE_SEPOLIA]: 'replicat-base-sepolia',
  [OPTIMISM_SEPOLIA]: 'replicat-optimism-sepolia',
  [BSC_TESTNET]: 'replicat-bsc-chapel',
  [ARBITRUM_SEPOLIA]: 'replicat-arbitrum-sepolia',
  [SONEIUM_MINATO]: 'replicat-soneuim-minato',
  [UNICHAIN_SEPOLIA]: 'replicat-unichain-sepolia',
};

const baseURL = 'https://subgraph.satsuma-prod.com';
const versionPath = 'version/v0.1.0/api';
const teamPath = 'stack3s-team--981216';

export const graphUrl = (chainBid: number) => {
  const subgraphID = chainBidToGraphId[chainBid as ReplicatEvmChainBidsType];

  if (!subgraphID) {
    throw new Error('Unexpected evm chain bid');
  }

  return `${baseURL}/${
    import.meta.env.VITE_GRAPH_API_KEY
  }/${teamPath}/${subgraphID}/${versionPath}`;
};

export const graphHeaders = () => {
  return {
    Authorization: `Bearer ${import.meta.env.VITE_GRAPH_API_KEY}`,
  };
};
