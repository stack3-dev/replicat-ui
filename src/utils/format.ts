import { Hex, pad } from 'viem';
import { getAddressLength, isChainBidValid } from './chains';

// eg:  0x111122223333444455556677779877A7B0D9E8603169DdbD7836e478b4624789
// =>                           0x779877A7B0D9E8603169DdbD7836e478b4624789
export const addressToEvm = (address: Hex): Hex => {
  return `0x${safeAddress(address).slice(26, 66)}`;
};

// eg: 0x779877A7B0D9E8603169DdbD7836e478b4624789
// => 0x000000000000000000000000779877A7B0D9E8603169DdbD7836e478b4624789
export const bytesToAddress = (bytes: Hex): Hex => {
  return pad(bytes);
};

// eg: 0x779877A7B0D9E8603169DdbD7836e478b4624789
// => 0x000000000000000000000000779877A7B0D9E8603169DdbD7836e478b4624789
export const addressToLength = (bytes32: Hex, length: number): Hex => {
  if (length > 32) {
    throw new Error('Invalid length');
  } else if (length === 32) {
    return bytes32;
  } else {
    return `0x${bytes32.slice(-length * 2)}`;
  }
};

// eg: 0x000000000000000000000000779877A7B0D9E8603169DdbD7836e478b4624789
// => 0x779877A7B0D9E8603169DdbD7836e478b4624789
export const formatAddress = (address: Hex, chainBid?: number): string => {
  const addressLength = isChainBidValid(chainBid)
    ? getAddressLength(chainBid!)
    : 32;
  return addressToLength(address, addressLength);
};

// eg: 0x000000000000000000000000779877A7B0D9E8603169DdbD7836e478b4624789
// => 0x77987...47889
export const shortenAddress = (
  address: Hex,
  chainBid: number | undefined,
  chars: number = 5
): string => {
  const formatedAddress = formatAddress(address, chainBid);
  return shorten(formatedAddress, chars);
};

export const shorten = (string: string, chars: number = 5): string => {
  return string.slice(0, chars + 2) + '...' + string.slice(-chars);
};

// eg: 779877A7B0D9E8603169DdbD7836e478b4624789
// => 0x779877A7B0D9E8603169DdbD7836e478b4624789
export const hexify = (str: string): Hex => {
  if (str.startsWith('0x')) {
    return str as Hex;
  } else {
    return `0x${str.slice(2)}`;
  }
};

export const safeAddress = (address: string | Hex | undefined): Hex => {
  return bytesToAddress(hexify(address ?? '0x'));
};

export const toFixedIfNecessary = (
  value: number | string,
  dp: number = 2
): number => {
  return +parseFloat(value.toString()).toFixed(dp);
};
