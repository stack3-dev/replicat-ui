import {
  ARBITRUM_SEPOLIA_BID,
  BASE_SEPOLIA_BID,
  BSC_TESTNET_BID,
  OPTIMISM_SEPOLIA_BID,
  SEPOLIA_BID,
  SONEIUM_MINATO_BID,
  UNICHAIN_SEPOLIA_BID,
} from './chains';

const chainBidToGraphId: Record<number, string> = {
  [SEPOLIA_BID]: 'replicat-ethereum-sepolia',
  [BASE_SEPOLIA_BID]: 'replicat-base-sepolia',
  [OPTIMISM_SEPOLIA_BID]: 'replicat-optimism-sepolia',
  [BSC_TESTNET_BID]: 'replicat-bsc-chapel',
  [ARBITRUM_SEPOLIA_BID]: 'replicat-arbitrum-sepolia',
  [SONEIUM_MINATO_BID]: 'replicat-soneuim-minato',
  [UNICHAIN_SEPOLIA_BID]: 'replicat-unichain-sepolia',
};

const baseURL = 'https://subgraph.satsuma-prod.com';
const versionPath = 'version/v0.1.0/api';
const teamPath = 'stack3s-team--981216';

export const graphUrl = (chainBid: number) => {
  const subgraphID = chainBidToGraphId[chainBid];

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
