import { Hex } from 'viem';
import { formatAddress } from './format';
import { chainBids, chains } from '@/config/chains';

export const getAlchemyName = (chainBid: number): string => {
  return chains[chainBid].alchemyNetwork;
};

export const getChainBidFromAlchemyName = (alchemyName: string): number => {
  const chain = chainBids.find(
    (chainBid) => chains[chainBid].alchemyNetwork === alchemyName
  );

  if (chain === undefined) {
    throw new Error(`Unexpected alchemy network name: ${alchemyName}`);
  }

  return chain;
};

export const getChainDecimals = (chainBid: number): number => {
  return chains[chainBid].decimals;
};

export const getBridgeAddress = (chainBid: number): Hex => {
  return chains[chainBid].bridgeAddress;
};

export const getAddressLength = (chainBid: number): number => {
  return chains[chainBid].addressLength;
};

export const isChainBidValid = (chainBid?: number): boolean => {
  return chainBid ? chainBids.includes(chainBid) : false;
};

export const getExplorerTransactionLink = (
  chainBid: number,
  hash: Hex
): string => {
  return `${chains[chainBid].explorerTransactionLink}${hash}`;
};

export const getExplorerAddressLink = (
  chainBid: number,
  address: Hex
): string => {
  const formattedAddress = formatAddress(address, chainBid);
  return `${chains[chainBid].explorerAddressLink}${formattedAddress}`;
};

export const getExplorerTokenLink = (
  chainBid: number,
  address: Hex
): string => {
  const formattedAddress = formatAddress(address, chainBid);
  return `${chains[chainBid].explorerTokenLink}${formattedAddress}`;
};

export const getChainName = (chainBid: number): string => {
  return chains[chainBid].name;
};
