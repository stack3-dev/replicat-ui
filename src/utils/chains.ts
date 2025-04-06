import {
  ReplicatChainBids,
  ReplicatChainBidsType,
  ReplicatChains,
} from '@/config/bridge';
import { Hex } from 'viem';
import { formatAddress } from './format';

export const getAlchemyName = (chainBid: number): string => {
  return ReplicatChains[chainBid as ReplicatChainBidsType].alchemyNetwork;
};

export const getChainBidFromAlchemyName = (alchemyName: string): number => {
  const chainBids = ReplicatChainBids;
  const chain = chainBids.find(
    (chainBid) => ReplicatChains[chainBid].alchemyNetwork === alchemyName
  );

  if (chain === undefined) {
    throw new Error(`Unexpected alchemy network name: ${alchemyName}`);
  }

  return chain;
};

export const getChainDecimals = (chainBid: number): number => {
  return ReplicatChains[chainBid as ReplicatChainBidsType].decimals;
};

export const getBridgeAddress = (chainBid: number): Hex => {
  return ReplicatChains[chainBid as ReplicatChainBidsType].bridgeAddress;
};

export const getAddressLength = (chainBid: number): number => {
  return ReplicatChains[chainBid as ReplicatChainBidsType].addressLength;
};

export const isChainBidValid = (chainBid?: number): boolean => {
  return ReplicatChainBids.includes(chainBid as ReplicatChainBidsType);
};

export const getExplorerTransactionLink = (
  chainBid: number,
  hash: Hex
): string => {
  return `${
    ReplicatChains[chainBid as ReplicatChainBidsType].explorerTransactionLink
  }${hash}`;
};

export const getExplorerAddressLink = (
  chainBid: number,
  address: Hex
): string => {
  const formattedAddress = formatAddress(address, chainBid);
  return `${
    ReplicatChains[chainBid as ReplicatChainBidsType].explorerAddressLink
  }${formattedAddress}`;
};

export const getExplorerTokenLink = (
  chainBid: number,
  address: Hex
): string => {
  const formattedAddress = formatAddress(address, chainBid);
  return `${
    ReplicatChains[chainBid as ReplicatChainBidsType].explorerTokenLink
  }${formattedAddress}`;
};

export const getChainName = (chainBid: number): string => {
  return ReplicatChains[chainBid as ReplicatChainBidsType].name;
};
