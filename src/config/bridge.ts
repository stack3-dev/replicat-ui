import {
  ARBITRUM_SEPOLIA,
  BASE_SEPOLIA,
  BSC_TESTNET,
  OPTIMISM_SEPOLIA,
  SEPOLIA,
  SONEIUM_MINATO,
  UNICHAIN_SEPOLIA,
} from './chains';
import EthereumIcon from '../assets/network-icons/1.svg';
import OptimismIcon from '../assets/network-icons/10.svg';
import BaseIcon from '../assets/network-icons/8453.svg';
import SoneiumIcon from '../assets/network-icons/1868.svg';
import BscIcon from '../assets/network-icons/56.svg';
import UnichainIcon from '../assets/network-icons/130.svg';
import ArbitrumIcon from '../assets/network-icons/42161.svg';
import { LAYERZERO } from './messengers';
import { Hex } from 'viem';
import { Network } from 'alchemy-sdk';

// Chains
export const ReplicatSolanaChainBids = [] as const; // [SOLANA, SOLANA_TESTNET] as const;

export const ReplicatEvmChainBids = [
  SEPOLIA,
  BASE_SEPOLIA,
  OPTIMISM_SEPOLIA,
  SONEIUM_MINATO,
  ARBITRUM_SEPOLIA,
  BSC_TESTNET,
  UNICHAIN_SEPOLIA,
] as const;

export const ReplicatChainBids = [
  ...ReplicatSolanaChainBids,
  ...ReplicatEvmChainBids,
] as const;

// Infer the type of the available chains
export type ReplicatSolanaChainBidsType =
  (typeof ReplicatSolanaChainBids)[number];
export type ReplicatEvmChainBidsType = (typeof ReplicatEvmChainBids)[number];
export type ReplicatChainBidsType = (typeof ReplicatChainBids)[number];

// Messengers

export const ReplicatMessengerClasses = [LAYERZERO] as const;

// Infer the type of the available messengers

export type ReplicatMessengerClassType =
  (typeof ReplicatMessengerClasses)[number];

// Chain Info
export type ChainInfo = {
  name: string;
  symbol: string;
  decimals: number;
  addressLength: number;
  icon: string;
  bridgeAddress: Hex;
  isEvm: boolean;
  isSuperchain: boolean;
  alchemyNetwork: Network;
  explorerTransactionLink: string;
  explorerAddressLink: string;
  explorerTokenLink: string;
};

export const ReplicatChains: Record<ReplicatChainBidsType, ChainInfo> = {
  [SEPOLIA]: {
    name: 'Ethereum Sepolia',
    symbol: 'ETH',
    icon: EthereumIcon,
    decimals: 18,
    addressLength: 20,
    isEvm: true,
    isSuperchain: true,
    bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
    alchemyNetwork: Network.ETH_SEPOLIA,
    explorerAddressLink: 'https://sepolia.etherscan.io/address/',
    explorerTransactionLink: 'https://sepolia.etherscan.io/tx/',
    explorerTokenLink: 'https://sepolia.etherscan.io/token/',
  },
  [BASE_SEPOLIA]: {
    name: 'Base Sepolia',
    symbol: 'ETH',
    icon: BaseIcon,
    decimals: 18,
    addressLength: 20,
    isEvm: true,
    isSuperchain: true,
    bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
    alchemyNetwork: Network.BASE_SEPOLIA,
    explorerAddressLink: 'https://sepolia.basescan.org/address/',
    explorerTransactionLink: 'https://sepolia.basescan.org/tx/',
    explorerTokenLink: 'https://sepolia.basescan.org/token/',
  },
  [OPTIMISM_SEPOLIA]: {
    name: 'Optimism Sepolia',
    symbol: 'ETH',
    decimals: 18,
    addressLength: 20,
    icon: OptimismIcon,
    bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
    isEvm: true,
    isSuperchain: true,
    alchemyNetwork: Network.OPT_SEPOLIA,
    explorerAddressLink: 'https://sepolia-optimism.etherscan.io/address/',
    explorerTransactionLink: 'https://sepolia-optimism.etherscan.io/tx/',
    explorerTokenLink: 'https://sepolia-optimism.etherscan.io/token/',
  },
  [ARBITRUM_SEPOLIA]: {
    name: 'Arbitrum Sepolia',
    symbol: 'ETH',
    decimals: 18,
    addressLength: 20,
    icon: ArbitrumIcon,
    bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
    isEvm: true,
    isSuperchain: false,
    alchemyNetwork: Network.ARB_SEPOLIA,
    explorerAddressLink: 'https://sepolia.arbiscan.io/address/',
    explorerTransactionLink: 'https://sepolia.arbiscan.io/tx/',
    explorerTokenLink: 'https://sepolia.arbiscan.io/token/',
  },
  [BSC_TESTNET]: {
    name: 'BSC Testnet',
    symbol: 'ETH',
    decimals: 18,
    addressLength: 20,
    icon: BscIcon,
    bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
    isEvm: true,
    isSuperchain: false,
    alchemyNetwork: Network.BNB_TESTNET,
    explorerAddressLink: 'https://testnet.bscscan.com/address/',
    explorerTransactionLink: 'https://testnet.bscscan.com/tx/',
    explorerTokenLink: 'https://testnet.bscscan.com/token/',
  },
  [UNICHAIN_SEPOLIA]: {
    name: 'Unichain Testnet',
    symbol: 'ETH',
    decimals: 18,
    addressLength: 20,
    icon: UnichainIcon,
    bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
    isEvm: true,
    isSuperchain: true,
    alchemyNetwork: Network.UNICHAIN_SEPOLIA,
    explorerAddressLink: 'https://testnet.unichain.io/address/',
    explorerTransactionLink: 'https://unichain-sepolia.blockscout.com/tx/',
    explorerTokenLink: 'https://unichain-sepolia.blockscout.com/token/',
  },
  [SONEIUM_MINATO]: {
    name: 'Soneium Minato',
    symbol: 'ETH',
    decimals: 18,
    addressLength: 20,
    icon: SoneiumIcon,
    bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
    isEvm: true,
    isSuperchain: true,
    alchemyNetwork: Network.SONEIUM_MINATO,
    explorerAddressLink: 'https://soneium-minato.blockscout.com/address/',
    explorerTransactionLink: 'https://soneium-minato.blockscout.com/tx/',
    explorerTokenLink: 'https://soneium-minato.blockscout.com/token/',
  },
};
