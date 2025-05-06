import {
  arbitrumSepolia,
  baseSepolia,
  bscTestnet,
  Chain,
  optimismSepolia,
  sepolia,
  unichainSepolia,
} from './chains';

const chainBidToGraphId: Record<number, string> = {
  [sepolia.id]: 'replicat-v1-ethereum-sepolia',
  [baseSepolia.id]: 'replicat-v1-base-sepolia',
  [optimismSepolia.id]: 'replicat-v1-optimism-sepolia',
  [bscTestnet.id]: 'replicat-v1-bsc-chapel',
  [arbitrumSepolia.id]: 'replicat-v1-arbitrum-sepolia',
  [unichainSepolia.id]: 'replicat-v1-unichain-sepolia',
};

const baseURL = 'https://subgraph.satsuma-prod.com';
const versionPath = 'version/v0.2.0/api';
const teamPath = 'stack3s-team--981216';

export const graphUrl = (chain: Chain) => {
  const subgraphID = chainBidToGraphId[chain.id];

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
