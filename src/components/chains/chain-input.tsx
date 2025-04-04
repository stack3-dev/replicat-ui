import { Asset } from '@/types/types';
import { RadioCardItem, RadioCardRoot } from '../ui/radio-card';
import { Grid } from '@chakra-ui/react';
import { ReplicatChainBids, ReplicatChains } from '@/config/bridge';
import ChainIcon from './chain-icon';

export default function ChainInput({
  chainBid,
  onChange,
  disabled,
}: {
  chainBid?: number;
  onChange: (chainBid: number) => void;
  assetFilter?: Asset;
  disabled?: boolean;
}) {
  const bridgeChains = ReplicatChainBids;

  return (
    <RadioCardRoot
      defaultValue={chainBid?.toString() ?? bridgeChains[0].toString()}
      onValueChange={(value) => onChange(parseInt(value.value ?? '0'))}
      width='full'
      align='center'
      justify='center'
      size='sm'
      disabled={disabled}
    >
      <Grid templateColumns='repeat(3, 1fr)' gap='2'>
        {bridgeChains.map((chainBid) => (
          <RadioCardItem
            label={ReplicatChains[chainBid].name}
            icon={<ChainIcon chainBid={chainBid} />}
            indicator={false}
            key={chainBid}
            value={chainBid.toString()}
          />
        ))}
      </Grid>
    </RadioCardRoot>
  );
}
