import { shorten } from '@/utils/format';
import { Badge, BadgeProps, Flex, Link } from '@chakra-ui/react';
import ChainIcon from '../chains/chain-icon';
import { LuExternalLink } from 'react-icons/lu';
import { Hex } from 'viem';
import { getExplorerTransactionLink } from '@/utils/chains';

export default function TransactionBadge({
  hash,
  chainBid,
  ...badgeProps
}: { hash: Hex; chainBid: number } & BadgeProps) {
  return (
    <Link href={getExplorerTransactionLink(chainBid, hash)}>
      <Badge variant='solid' {...badgeProps}>
        <Flex alignItems={'center'} gap={2}>
          <ChainIcon
            bgColor='transparent'
            border='none'
            boxSize='15px'
            chainBid={chainBid}
          />

          {shorten(hash)}

          <LuExternalLink />
        </Flex>
      </Badge>
    </Link>
  );
}
