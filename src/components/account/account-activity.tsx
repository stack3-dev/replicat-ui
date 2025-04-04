import { getExplorerTransactionLink, isChainBidValid } from '@/utils/chains';
import { safeAddress } from '@/utils/format';
import { Flex, Icon, Link, Separator, Text, VStack } from '@chakra-ui/react';
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

export const AccountActivity = () => {
  const account = useAccount();
  const isBridgeChain = isChainBidValid(account.chainId);

  const transfersQuery = useBridgeTransfers({
    address: safeAddress(account.address),
    chainBid: account.chainId ?? 0,
    enabled: isBridgeChain,
  });

  const transfers = transfersQuery.data ?? [];

  return (
    <VStack gap={2}>
      {transfers.map((transfer) => (
        <>
          <Flex
            gap={2}
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
                  account={{
                    address: transfer.from,
                    chainBid: account.chainId ?? 0,
                  }}
                />
                <Icon>
                  <LuArrowRight />
                </Icon>
                <AccountBadge
                  account={{
                    address: transfer.to,
                    chainBid: transfer.chainBid,
                  }}
                />
              </Flex>

              <TransferParams transfer={transfer} chainBid={account.chainId!} />
            </Flex>
            <Link
              href={getExplorerTransactionLink(
                account.chainId!,
                transfer.transactionHash
              )}
            >
              <Icon>
                <LuExternalLink />
              </Icon>
            </Link>

            <Separator />
          </Flex>
        </>
      ))}
    </VStack>
  );
};

const TransferParams = ({
  transfer,
  chainBid,
}: {
  transfer: Transfer;
  chainBid: number;
}) => {
  const { data: dataReplica } = useBridgeReplicaByHash({
    assetHash: transfer.assetHash,
    chainBid: chainBid,
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
