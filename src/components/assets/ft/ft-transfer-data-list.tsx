import { Transfer, TransferParamsFT } from '@/types/types';
import { DataList, Link, Separator, Stack } from '@chakra-ui/react';
import AssetDataList from '../asset-data-list';
import { formatUnits } from 'viem';
import { LuExternalLink } from 'react-icons/lu';
import AddressBadge from '@/components/common/address-badge';
import AccountBadge from '@/components/account/account-badge';

export default function FtTransferDataList({
  transfer,
}: {
  transfer: Transfer;
}) {
  const params = transfer.params as TransferParamsFT;

  // const { data: dataQuote } = useBridgeTransferQuote({
  //   transfer,
  // });

  return (
    <Stack gap={4}>
      <AssetDataList asset={transfer.asset} />
      <Separator />
      <DataList.Root orientation='horizontal'>
        <DataList.Item>
          <DataList.ItemLabel>From </DataList.ItemLabel>
          <DataList.ItemValue>
            <AccountBadge account={transfer.from} />
          </DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>To </DataList.ItemLabel>
          <DataList.ItemValue>
            <AccountBadge account={transfer.to} />
          </DataList.ItemValue>
        </DataList.Item>

        <DataList.Item>
          <DataList.ItemLabel>Amount </DataList.ItemLabel>
          <DataList.ItemValue>
            {formatUnits(params.amount, params.decimals)}
          </DataList.ItemValue>
        </DataList.Item>

        {/* <DataList.Item>
          <DataList.ItemLabel>Transfer fee </DataList.ItemLabel>
          <DataList.ItemValue>
            {dataQuote
              ? formatUnits(dataQuote, getChainDecimals(transfer.from.chainBid))
              : '-'}
          </DataList.ItemValue>
        </DataList.Item> */}

        <DataList.Item>
          <DataList.ItemLabel>Bridge </DataList.ItemLabel>
          <DataList.ItemValue>
            <AddressBadge address={transfer.from.chain.bridgeAddress} />
          </DataList.ItemValue>
        </DataList.Item>

        <DataList.Item>
          <DataList.ItemLabel>Relayer </DataList.ItemLabel>
          <DataList.ItemValue>
            <Link href='https://wormhole.com/'>
              Wormhole <LuExternalLink />
            </Link>
          </DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
    </Stack>
  );
}
