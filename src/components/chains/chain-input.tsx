import { Asset } from '@/types/types';
import { RadioCardItem, RadioCardRoot } from '../ui/radio-card';
import { Grid } from '@chakra-ui/react';
import ChainIcon from './chain-icon';
import { chainBids, chains } from '@/config/chains';

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
  return (
    <RadioCardRoot
      defaultValue={chainBid?.toString() ?? chainBids[0].toString()}
      onValueChange={(value) => onChange(parseInt(value.value ?? '0'))}
      width='full'
      align='center'
      justify='center'
      size='sm'
      disabled={disabled}
    >
      <Grid templateColumns='repeat(3, 1fr)' gap='2'>
        {chainBids.map((chainBid) => (
          <RadioCardItem
            label={chains[chainBid].name}
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
