import { Hex } from 'viem';

export type ERC20 = {
  chainBid: number;
  address: Hex;
};

export enum AssetType {
  FT = 0,
  XFT = 1,
  NFT = 2,
  XNFT = 3,
}

export type Asset = {
  chainBid: number;
  address: Hex;
  type: AssetType;
  metadata: MetadataFT;
};

export type Replica = {
  address: Hex;
  chainBid: number;
  creator: Hex;
  assetHash: Hex;
  asset: Asset;
};

export type Account = {
  chainBid: number;
  address: Hex;
};

export type TransferEvmPermit = {
  token: Hex;
  value: bigint;
  deadline: bigint;
  v: bigint;
  r: Hex;
  s: Hex;
};

export type Transfer = {
  asset: Asset;
  from: Account;
  to: Account;
  params: TransferParamsFT | TransferParamsNFT;
  nonce: bigint;
};

export type TransferParamsFT = {
  amount: bigint;
  decimals: number;
};

export type TransferParamsNFT = {
  tokenId: bigint;
};

export type MetadataFT = {
  name: string;
  symbol: string;
  decimals: number;
};

export type MetadataNFT = {
  name: string;
  symbol: string;
};
