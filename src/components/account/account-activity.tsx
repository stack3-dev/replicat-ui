import { safeAddress } from '@/utils/format';
import { Flex, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import {
  useBridgeTransfers,
  type Transfer,
} from '@/hooks/bridge/useBridgeTransfers';
import { LuArrowRight, LuExternalLink } from 'react-icons/lu';
import AccountBadge from './account-badge';
import { AssetType } from '@/types/types';
import { decodeTransferParamsFT } from '@/utils/encoding';
import { formatUnits } from 'viem';
import { useBridgeReplicaByHash } from '@/hooks/bridge/useBridgeReplicaByHash';
import { Chain, chainByBid, chainById } from '@/config/chains';
import { getWormholeTransactionLink } from '@/utils/chains';

export const AccountActivity = () => {
  const { address, chainId } = useAccount();

  const chain = chainById(chainId)!;

  const transfersQuery = useBridgeTransfers({
    address: safeAddress(address),
    chain: chain,
    enabled: true,
  });

  const transfers = transfersQuery.data ?? [];

  return (
    <VStack gap={4}>
      {transfers.map((transfer) => (
        <>
          <Flex
            gap={2}
            p={2}
            alignItems={'center'}
            key={'account-activity-transfer-' + transfer.transferHash}
          >
            <Flex
              gap={2}
              alignItems={'center'}
              justifyContent={'space-between'}
              direction={'column'}
            >
              <Flex gap={2} alignItems={'center'}>
                <AccountBadge
                  variant={'outline'}
                  account={{
                    address: transfer.from,
                    chain: chain!,
                  }}
                />
                <Icon>
                  <LuArrowRight />
                </Icon>
                <AccountBadge
                  variant={'outline'}
                  account={{
                    address: transfer.to,
                    chain: chainByBid(transfer.chainBid)!,
                  }}
                />
              </Flex>

              <Flex
                gap={2}
                justifyContent={'center'}
                alignItems={'center'}
                borderLeft={'1px solid var(--chakra-colors-border)'}
                w={'100%'}
              >
                <TransferParams transfer={transfer} chain={chain} />
                <Link
                  href={getWormholeTransactionLink(transfer.transactionHash)}
                >
                  <Icon>
                    <LuExternalLink />
                  </Icon>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </>
      ))}
    </VStack>
  );
};

const TransferParams = ({
  transfer,
  chain,
}: {
  transfer: Transfer;
  chain: Chain;
}) => {
  const { data: dataReplica } = useBridgeReplicaByHash({
    assetHash: transfer.assetHash,
    chain: chain,
  });

  if (
    transfer.assetType === AssetType.FT ||
    transfer.assetType === AssetType.XFT
  ) {
    const params = decodeTransferParamsFT(transfer.params);
    return (
      <>
        <Text>
          {formatUnits(params.amount, params.decimals)}{' '}
          {dataReplica ? dataReplica.asset.metadata.symbol : '-'}
        </Text>
      </>
    );
  } else return <></>;
};
