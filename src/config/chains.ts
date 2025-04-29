import EthereumIcon from '../assets/network-icons/1.svg';
import OptimismIcon from '../assets/network-icons/10.svg';
import BaseIcon from '../assets/network-icons/8453.svg';
import SoneiumIcon from '../assets/network-icons/1868.svg';
import BscIcon from '../assets/network-icons/56.svg';
import UnichainIcon from '../assets/network-icons/130.svg';
import ArbitrumIcon from '../assets/network-icons/42161.svg';
import { Hex } from 'viem';
import { Network } from 'alchemy-sdk';

// mainnet
export const SOLANA_BID = 101;
export const ETHEREUM_BID = 1;

// testnet
export const SEPOLIA_BID = 11155111;
export const SOLANA_TESTNET_BID = 102;
export const OPTIMISM_SEPOLIA_BID = 11155420;
export const BASE_SEPOLIA_BID = 84532;
export const ARBITRUM_SEPOLIA_BID = 421614;
export const SONEIUM_MINATO_BID = 1946;
export const UNICHAIN_SEPOLIA_BID = 1301;
export const BSC_TESTNET_BID = 97;

export type ChainInfo = {
  bid: number;
  name: string;
  symbol: string;
  decimals: number;
  addressLength: number;
  icon: string;
  bridgeAddress: Hex;
  isEvm: boolean;
  isSuperchain: boolean;
  isTestnet: boolean;
  alchemyNetwork: Network;
  explorerTransactionLink: string;
  explorerAddressLink: string;
  explorerTokenLink: string;
};

export const ethereum: ChainInfo = {
  bid: ETHEREUM_BID,
  name: 'Ethereum Mainnet',
  symbol: 'ETH',
  icon: EthereumIcon,
  decimals: 18,
  addressLength: 20,
  isEvm: true,
  isSuperchain: true,
  isTestnet: false,
  bridgeAddress: '0x0000000000000000000000000000000000000000',
  alchemyNetwork: Network.ETH_MAINNET,
  explorerAddressLink: 'https://etherscan.io/address/',
  explorerTransactionLink: 'https://etherscan.io/tx/',
  explorerTokenLink: 'https://etherscan.io/token/',
};

export const sepolia: ChainInfo = {
  bid: SEPOLIA_BID,
  name: 'Ethereum Sepolia',
  symbol: 'ETH',
  icon: EthereumIcon,
  decimals: 18,
  addressLength: 20,
  isEvm: true,
  isSuperchain: true,
  isTestnet: true,
  bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
  alchemyNetwork: Network.ETH_SEPOLIA,
  explorerAddressLink: 'https://sepolia.etherscan.io/address/',
  explorerTransactionLink: 'https://sepolia.etherscan.io/tx/',
  explorerTokenLink: 'https://sepolia.etherscan.io/token/',
};

export const baseSepolia: ChainInfo = {
  bid: BASE_SEPOLIA_BID,
  name: 'Base Sepolia',
  symbol: 'ETH',
  icon: BaseIcon,
  decimals: 18,
  addressLength: 20,
  isEvm: true,
  isSuperchain: true,
  isTestnet: true,
  bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
  alchemyNetwork: Network.BASE_SEPOLIA,
  explorerAddressLink: 'https://sepolia.basescan.org/address/',
  explorerTransactionLink: 'https://sepolia.basescan.org/tx/',
  explorerTokenLink: 'https://sepolia.basescan.org/token/',
};

export const optimismSepolia: ChainInfo = {
  bid: OPTIMISM_SEPOLIA_BID,
  name: 'Optimism Sepolia',
  symbol: 'ETH',
  decimals: 18,
  addressLength: 20,
  icon: OptimismIcon,
  bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
  isEvm: true,
  isSuperchain: true,
  isTestnet: true,
  alchemyNetwork: Network.OPT_SEPOLIA,
  explorerAddressLink: 'https://sepolia-optimism.etherscan.io/address/',
  explorerTransactionLink: 'https://sepolia-optimism.etherscan.io/tx/',
  explorerTokenLink: 'https://sepolia-optimism.etherscan.io/token/',
};

export const arbitrumSepolia: ChainInfo = {
  bid: ARBITRUM_SEPOLIA_BID,
  name: 'Arbitrum Sepolia',
  symbol: 'ETH',
  decimals: 18,
  addressLength: 20,
  icon: ArbitrumIcon,
  bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
  isEvm: true,
  isSuperchain: false,
  isTestnet: true,
  alchemyNetwork: Network.ARB_SEPOLIA,
  explorerAddressLink: 'https://sepolia.arbiscan.io/address/',
  explorerTransactionLink: 'https://sepolia.arbiscan.io/tx/',
  explorerTokenLink: 'https://sepolia.arbiscan.io/token/',
};

export const bscTestnet: ChainInfo = {
  bid: BSC_TESTNET_BID,
  name: 'BSC Testnet',
  symbol: 'ETH',
  decimals: 18,
  addressLength: 20,
  icon: BscIcon,
  bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
  isEvm: true,
  isSuperchain: false,
  isTestnet: true,
  alchemyNetwork: Network.BNB_TESTNET,
  explorerAddressLink: 'https://testnet.bscscan.com/address/',
  explorerTransactionLink: 'https://testnet.bscscan.com/tx/',
  explorerTokenLink: 'https://testnet.bscscan.com/token/',
};

export const unichainSepolia: ChainInfo = {
  bid: UNICHAIN_SEPOLIA_BID,
  name: 'Unichain Testnet',
  symbol: 'ETH',
  decimals: 18,
  addressLength: 20,
  icon: UnichainIcon,
  bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
  isEvm: true,
  isSuperchain: true,
  isTestnet: true,
  alchemyNetwork: Network.UNICHAIN_SEPOLIA,
  explorerAddressLink: 'https://testnet.unichain.io/address/',
  explorerTransactionLink: 'https://unichain-sepolia.blockscout.com/tx/',
  explorerTokenLink: 'https://unichain-sepolia.blockscout.com/token/',
};

export const soneiumMinato: ChainInfo = {
  bid: SONEIUM_MINATO_BID,
  name: 'Soneium Minato',
  symbol: 'ETH',
  decimals: 18,
  addressLength: 20,
  icon: SoneiumIcon,
  bridgeAddress: '0xf303343F427157A306E4931f396b448fc6F357dE',
  isEvm: true,
  isSuperchain: true,
  isTestnet: true,
  alchemyNetwork: Network.SONEIUM_MINATO,
  explorerAddressLink: 'https://soneium-minato.blockscout.com/address/',
  explorerTransactionLink: 'https://soneium-minato.blockscout.com/tx/',
  explorerTokenLink: 'https://soneium-minato.blockscout.com/token/',
};

export const isTestnet = import.meta.env.VITE_TESTNET === 'true';

export const MainnetChainBids = [ETHEREUM_BID] as const;
export const TestnetChainBids = [
  SEPOLIA_BID,
  BASE_SEPOLIA_BID,
  OPTIMISM_SEPOLIA_BID,
  SONEIUM_MINATO_BID,
  ARBITRUM_SEPOLIA_BID,
  BSC_TESTNET_BID,
  UNICHAIN_SEPOLIA_BID,
] as const;

export const chainBids: readonly number[] = isTestnet
  ? TestnetChainBids
  : MainnetChainBids;

export type TestnetChainBidsType = (typeof TestnetChainBids)[number];
export type MainnetChainBidsType = (typeof MainnetChainBids)[number];

export const tesnetChains: Record<TestnetChainBidsType, ChainInfo> = {
  [SEPOLIA_BID]: sepolia,
  [BASE_SEPOLIA_BID]: baseSepolia,
  [OPTIMISM_SEPOLIA_BID]: optimismSepolia,
  [ARBITRUM_SEPOLIA_BID]: arbitrumSepolia,
  [BSC_TESTNET_BID]: bscTestnet,
  [UNICHAIN_SEPOLIA_BID]: unichainSepolia,
  [SONEIUM_MINATO_BID]: soneiumMinato,
};

export const mainnetChains: Record<MainnetChainBidsType, ChainInfo> = {
  [ETHEREUM_BID]: ethereum,
};

export const chains: Record<number, ChainInfo> = isTestnet
  ? tesnetChains
  : mainnetChains;
