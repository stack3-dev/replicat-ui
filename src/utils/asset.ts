import { Asset, AssetType, MetadataFT, MetadataNFT } from '@/types/types';
import { zeroAddress } from 'viem';

export const getAssetName = (asset: Asset): string => {
  if (asset.type === AssetType.FT || asset.type === AssetType.XFT) {
    return (asset.metadata as MetadataFT).name;
  } else if (asset.type === AssetType.NFT || asset.type === AssetType.XNFT) {
    return (asset.metadata as MetadataNFT).symbol;
  } else {
    throw new Error('Invalid asset type');
  }
};

export const getAssetSymbol = (asset: Asset): string => {
  if (asset.type === AssetType.FT || asset.type === AssetType.XFT) {
    return (asset.metadata as MetadataFT).symbol;
  } else if (asset.type === AssetType.NFT || asset.type === AssetType.XNFT) {
    return (asset.metadata as MetadataNFT).symbol;
  } else {
    throw new Error('Invalid asset type');
  }
};

export const getAssetTypeName = (assetType: AssetType): string => {
  switch (assetType) {
    case AssetType.FT:
      return 'Fungible Token';
    case AssetType.XFT:
      return 'Cross-chain Fungible Token';
    case AssetType.NFT:
      return 'Non-Fungible Token';
    case AssetType.XNFT:
      return 'Cross-chainNon-Fungible Token';
    default:
      throw new Error('Invalid asset type');
  }
};

export const zeroAsset = {
  address: zeroAddress,
  chainBid: 0,
  type: 0,
  metadata: {
    name: '',
    symbol: '',
    decimals: 0,
  },
};
