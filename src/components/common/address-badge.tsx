import { formatAddress, shortenAddress } from '@/utils/format';
import { Badge, BadgeProps, Link } from '@chakra-ui/react';
import { LuCopy } from 'react-icons/lu';
import { Hex } from 'viem';
import { useCopyToClipboard } from '@uidotdev/usehooks';

export default function AddressBadge({
  address,
  chainBid,
  ...badgeProps
}: { address: Hex; chainBid?: number } & BadgeProps) {
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <Link onClick={() => copyToClipboard(formatAddress(address, chainBid))}>
      <Badge variant='solid' {...badgeProps}>
        {shortenAddress(address, chainBid)}
        <LuCopy />
      </Badge>
    </Link>
  );
}
