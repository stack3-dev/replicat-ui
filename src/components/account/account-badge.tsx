import { formatAddress, shortenAddress } from '@/utils/format';
import { Badge, BadgeProps, Flex, Link } from '@chakra-ui/react';
import ChainIcon from '../chains/chain-icon';
import { LuCopy } from 'react-icons/lu';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { Account } from '@/types/types';

export default function AccountBadge({
  account,
  ...badgeProps
}: { account: Account } & BadgeProps) {
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <Link
      onClick={() =>
        copyToClipboard(formatAddress(account.address, account.chainBid))
      }
    >
      <Badge variant='solid' {...badgeProps}>
        <Flex alignItems={'center'} gap={2}>
          <ChainIcon
            variant='ghost'
            boxSize={'17px'}
            chainBid={account.chainBid}
          />
          {shortenAddress(account.address, account.chainBid)}
          <LuCopy />
        </Flex>
      </Badge>
    </Link>
  );
}
