import { Badge, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { LuCircleCheck, LuExternalLink } from 'react-icons/lu';
import { Hex } from 'viem';
import TransactionBadge from './transaction-badge';

export default function TransactionSuccess({
  hash,
  chainBid,
  isLayerZero,
}: {
  hash: Hex;
  chainBid: number;
  isLayerZero?: boolean;
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
        Transaction: <TransactionBadge hash={hash} chainBid={chainBid} />
        {isLayerZero && (
          <Link href={`https://layerzeroscan.com/tx/${hash}`}>
            <Badge variant='solid'>
              LayerZero <LuExternalLink />
            </Badge>
          </Link>
        )}
      </Flex>
    </Stack>
  );
}
