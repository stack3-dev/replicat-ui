import { Button, Flex, Input, Stack, Text, Field } from '@chakra-ui/react';

import { LuChevronDown, LuInfo } from 'react-icons/lu';
import { Asset, AssetType, MetadataFT } from '@/types/types';
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';

import { safeAddress } from '@/utils/format';
import ChainInput from '../../chains/chain-input';
import { useCallback, useEffect } from 'react';
import { useFtMetadata } from '@/hooks/assets/ft/useFTMetadata';
import { useQueryStates } from 'nuqs';
import { assetQueryState } from '@/queries';
import { Tooltip } from '@/components/ui/tooltip';
import AssetDataList from '../asset-data-list';
import { FtAssetIcon } from './ft-asset-icon';
import { assetEquals } from '@/utils/types';
import { useBridgeReplicaByAddress } from '@/hooks/bridge/useBridgeReplicaByAddress';
import { chainByBid } from '@/config/chains';

export default function FtAssetInput({
  asset,
  onChange,
}: {
  asset: Asset | undefined;
  onChange: (asset: Asset | undefined) => void;
}) {
  const [query, setQuery] = useQueryStates(assetQueryState);

  const chain = chainByBid(query.chainBid);

  const {
    data: dataMetadata,
    isLoading: isLoadingMetadata,
    error: errorMetadata,
  } = useFtMetadata({
    chain: chain,
    address: safeAddress(query.address),
    enabled: query.address !== '' && !!chain,
  });

  const {
    data: dataReplica,
    isLoading: isLoadingBridgeReplica,
    error: errorBridgeReplica,
  } = useBridgeReplicaByAddress({
    address: safeAddress(query.address),
    chain: chain!,
    enabled: !!chain,
  });

  const isLoading = isLoadingMetadata || isLoadingBridgeReplica;
  const error = errorMetadata ?? errorBridgeReplica;

  const handleAssetChange = useCallback(
    (asset: Asset | undefined) => {
      onChange(asset);
      setQuery({
        address: asset ? asset.address : undefined,
        chainBid: asset?.chainBid,
      });
    },
    [onChange, setQuery]
  );

  const handleMetadataChange = useCallback(
    (metadata: MetadataFT) => {
      const newAsset = dataReplica
        ? dataReplica.asset
        : {
            address: safeAddress(query.address),
            chainBid: query.chainBid,
            type: AssetType.FT,
            metadata,
          };
      if (!assetEquals(asset, newAsset)) {
        handleAssetChange(newAsset);
      }
    },
    [dataReplica, query.address, query.chainBid, asset, handleAssetChange]
  );

  useEffect(() => {
    if (!isLoading && dataMetadata) {
      handleMetadataChange(dataMetadata);
    }
  }, [isLoading, dataMetadata, handleMetadataChange]);

  return (
    <>
      <PopoverRoot positioning={{ sameWidth: true }}>
        <PopoverTrigger asChild>
          <Button
            size='2xl'
            variant='subtle'
            width='sm'
            loading={isLoadingMetadata}
          >
            <Flex flex='1' justify='space-between' align='center'>
              {asset ? (
                <>
                  <FtAssetIcon asset={asset} />
                  <Text>
                    {asset.metadata.symbol} - {asset.metadata.name}
                  </Text>
                </>
              ) : (
                <Text>Select an token</Text>
              )}

              <Flex gap='2'>
                {asset && (
                  <Tooltip content={<AssetDataList p={2} asset={asset} />}>
                    <LuInfo />
                  </Tooltip>
                )}
                <LuChevronDown />
              </Flex>
            </Flex>
          </Button>
        </PopoverTrigger>
        <PopoverContent width='auto'>
          <PopoverArrow />
          <PopoverBody>
            <Stack gap='4'>
              {/* <Field label='Search an asset'>
                <InputGroup flex='1' width='full' startElement={<LuSearch />}>
                  <Input
                    size='sm'
                    width='full'
                    placeholder="Search an asset (eg. 'ETH', '0x1234...')."
                  />
                </InputGroup>
              </Field>

              <Separator /> */}

              <Field.Root>
                <Field.Label>Network</Field.Label>
                <ChainInput
                  chain={chain}
                  onChange={(c) => setQuery({ ...query, chainBid: c.bridgeId })}
                  disabled={isLoadingMetadata}
                />
              </Field.Root>

              <Field.Root invalid={error ? true : false}>
                <Field.Label>Address</Field.Label>
                <Input
                  size='sm'
                  width='full'
                  placeholder='Contract address (eg. 0x1234...abcd)'
                  value={query.address}
                  onChange={(e) =>
                    setQuery({ ...query, address: e.target.value })
                  }
                  disabled={isLoadingMetadata}
                />
              </Field.Root>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </>
  );
}
