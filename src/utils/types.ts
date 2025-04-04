import { Asset } from '@/types/types';
import { hashAsset } from './encoding';

export const assetEquals = (a1?: Asset, a2?: Asset) => {
  if (!a1 || !a2) {
    return false;
  }
  return hashAsset(a1) === hashAsset(a2);
};
