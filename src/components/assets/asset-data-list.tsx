import AccountBadge from '@/components/account/account-badge';
import { Asset, AssetType, MetadataFT } from '@/types/types';
import { getAssetTypeName } from '@/utils/asset';
import { DataList, DataListRootProps } from '@chakra-ui/react';

export default function AssetDataList({
  asset,
  ...dataListProps
}: { asset: Asset } & DataListRootProps) {
  const metadata = asset.metadata as MetadataFT;
  return (
    <DataList.Root orientation='horizontal' {...dataListProps}>
      <DataList.Item>
        <DataList.ItemLabel>Origin</DataList.ItemLabel>
        <DataList.ItemValue>
          <AccountBadge
            account={{ address: asset.address, chainBid: asset.chainBid }}
          />
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Type</DataList.ItemLabel>
        <DataList.ItemValue>{getAssetTypeName(asset.type)}</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>{metadata.name}</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Symbol</DataList.ItemLabel>
        <DataList.ItemValue>{metadata.symbol}</DataList.ItemValue>
      </DataList.Item>
      {asset.type === AssetType.FT ||
        (asset.type === AssetType.XFT && (
          <DataList.Item>
            <DataList.ItemLabel>Decimals</DataList.ItemLabel>
            <DataList.ItemValue>{metadata.decimals}</DataList.ItemValue>
          </DataList.Item>
        ))}
    </DataList.Root>
  );
}
