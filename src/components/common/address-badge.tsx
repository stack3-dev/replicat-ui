import { shortenAddress } from '@/utils/format';
import { Badge, BadgeProps, Link } from '@chakra-ui/react';
import { LuCopy } from 'react-icons/lu';
import { Hex } from 'viem';
import { useCopyToClipboard } from '@uidotdev/usehooks';

export default function AddressBadge({
  address,
  ...badgeProps
}: { address: Hex } & BadgeProps) {
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <Link onClick={() => copyToClipboard(address)}>
      <Badge variant='solid' {...badgeProps}>
        {shortenAddress(address)}
        <LuCopy />
      </Badge>
    </Link>
  );
}
