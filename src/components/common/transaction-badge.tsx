import { shorten } from '@/utils/format';
import { Badge, BadgeProps, Flex, Link } from '@chakra-ui/react';
import ChainIcon from '../chains/chain-icon';
import { LuExternalLink } from 'react-icons/lu';
import { Hex } from 'viem';
import { getExplorerTransactionLink } from '@/utils/chains';
import { Chain } from '@/config/chains';

export default function TransactionBadge({
  hash,
  chain,
  ...badgeProps
}: { hash: Hex; chain: Chain } & BadgeProps) {
  return (
    <Link href={getExplorerTransactionLink(chain, hash)}>
      <Badge variant='solid' {...badgeProps}>
        <Flex alignItems={'center'} gap={2}>
          <ChainIcon
            bgColor='transparent'
            border='none'
            boxSize='15px'
            chain={chain}
          />

          {shorten(hash)}

          <LuExternalLink />
        </Flex>
      </Badge>
    </Link>
  );
}
