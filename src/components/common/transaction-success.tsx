import { Badge, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { LuCircleCheck, LuExternalLink } from 'react-icons/lu';
import { Hex } from 'viem';
import TransactionBadge from './transaction-badge';
import { Chain } from '@/config/chains';
import { getWormholeTransactionLink } from '@/utils/chains';

export default function TransactionSuccess({
  hash,
  chain,
  isWormhole,
}: {
  hash: Hex;
  chain: Chain;
  isWormhole?: boolean;
}) {
  return (
    <Stack gap='2'>
      <Flex gap='2' alignItems='center'>
        <Icon size='xl' color='green.500'>
          <LuCircleCheck />
        </Icon>
        <Text fontSize='xl'>Success</Text>
      </Flex>
      <Flex gap='2'>
        Transaction: <TransactionBadge hash={hash} chain={chain} />
        {isWormhole && (
          <Link href={getWormholeTransactionLink(hash)}>
            <Badge variant='solid'>
              Wormhole <LuExternalLink />
            </Badge>
          </Link>
        )}
      </Flex>
    </Stack>
  );
}
