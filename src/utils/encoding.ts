import {
  Asset,
  AssetType,
  MetadataFT,
  MetadataNFT,
  TransferParamsFT,
  TransferParamsNFT,
} from '@/types/types';
import { decodeAbiParameters, encodeAbiParameters, Hex, keccak256 } from 'viem';

export const hashAsset = (asset: Asset) => {
  return keccak256(encodeAsset(asset));
};

export const encodeMetadataFT = (metadata: MetadataFT) => {
  return encodeAbiParameters(
    [
      { name: 'name', type: 'string' },
      { name: 'symbol', type: 'string' },
      { name: 'decimals', type: 'uint8' },
    ],
    [metadata.name ?? '', metadata.symbol ?? '', metadata.decimals ?? 0]
  );
};

export const encodeMetadataNFT = (metadata: MetadataNFT) => {
  return encodeAbiParameters(
    [
      { name: 'name', type: 'string' },
      { name: 'symbol', type: 'string' },
    ],
    [metadata.name ?? '', metadata.symbol ?? '']
  );
};

export const decodeMetadataFT = (data: Hex): MetadataFT => {
  const [name, symbol, decimals] = decodeAbiParameters(
    [
      { name: 'name', type: 'string' },
      { name: 'symbol', type: 'string' },
      { name: 'decimals', type: 'uint8' },
    ],
    data
  );

  return {
    name,
    symbol,
    decimals,
  };
};

export const encodeTransferParamsFT = (params: TransferParamsFT) => {
  return encodeAbiParameters(
    [
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'decimals',
        type: 'uint8',
      },
    ],
    [params.amount, params.decimals]
  );
};

export const encodeTransferParamsNFT = (params: TransferParamsNFT) => {
  return encodeAbiParameters(
    [
      {
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    [params.tokenId]
  );
};

export const encodeAsset = (asset: Asset) => {
  return encodeAbiParameters(
    [
      { name: 'type_', type: 'uint8' },
      { name: 'chainBid', type: 'uint256' },
      { name: 'address_', type: 'bytes32' },
      { name: 'metadata', type: 'bytes' },
    ],
    [
      asset.type,
      BigInt(asset.chainBid),
      asset.address,
      encodeAssetMetadata(asset),
    ]
  );
};

export const encodeAssetMetadata = (asset: Asset) => {
  switch (asset.type) {
    case AssetType.FT:
    case AssetType.XFT:
      return encodeMetadataFT(asset.metadata as MetadataFT);
    case AssetType.NFT:
    case AssetType.XNFT:
      return encodeMetadataNFT(asset.metadata as MetadataNFT);
    default:
      throw new Error('Invalid asset type');
  }
};

export const decodeTransferParamsFT = (params: Hex): TransferParamsFT => {
  const [amount, decimals] = decodeAbiParameters(
    [
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'decimals',
        type: 'uint8',
      },
    ],
    params
  );

  return {
    amount,
    decimals,
  };
};
