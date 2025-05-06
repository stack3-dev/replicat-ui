import { Asset } from '@/types/types';
import { RadioCardItem, RadioCardRoot } from '../ui/radio-card';
import { Grid } from '@chakra-ui/react';
import ChainIcon from './chain-icon';
import { Chain, chainById, chains } from '@/config/chains';

export default function ChainInput({
  chain,
  onChange,
  disabled,
}: {
  chain?: Chain;
  onChange: (chain: Chain) => void;
  assetFilter?: Asset;
  disabled?: boolean;
}) {
  return (
    <RadioCardRoot
      defaultValue={chain?.id.toString()}
      onValueChange={(value) => onChange(chainById(Number(value.value))!)}
      width='full'
      align='center'
      justify='center'
      size='sm'
      disabled={disabled}
    >
      <Grid templateColumns='repeat(3, 1fr)' gap='2'>
        {chains.map((c) => (
          <RadioCardItem
            label={c.name}
            icon={<ChainIcon chain={c} />}
            indicator={false}
            key={c.id}
            value={c.id.toString()}
          />
        ))}
      </Grid>
    </RadioCardRoot>
  );
}
