import { Button, Input } from '@chakra-ui/react';
import { InputGroup } from '../../ui/input-group';
import { Account, TransferParamsFT, Asset, MetadataFT } from '@/types/types';
import { Field } from '../../ui/field';
import { useCallback } from 'react';
import { formatUnits, parseUnits } from 'viem';
import { useAssetBalanceOf } from '@/hooks/assets/useAssetBalanceOf';

export default function FtTransferParamsInput({
  asset,
  from,
  defaultParams,
  onChange,
}: {
  asset: Asset;
  from: Account;
  defaultParams: TransferParamsFT;
  onChange: (params: TransferParamsFT) => void;
}) {
  const decimals = (asset.metadata as MetadataFT).decimals ?? 0;

  const formatAmount = useCallback(
    (amount: bigint) => {
      return formatUnits(amount, decimals);
    },
    [decimals]
  );

  const parseAmount = useCallback(
    (valueStr: string) => {
      const value = parseFloat(valueStr);
      if (isNaN(value)) {
        return 0n;
      } else {
        return parseUnits(value.toString(), decimals);
      }
    },
    [decimals]
  );

  const { data: dataBalance, isPending: isPendingBalance } = useAssetBalanceOf({
    account: from,
    asset: asset!,
    enabled: !!from && !!asset,
  });

  const setMax = useCallback(() => {
    if (dataBalance) {
      onChange({
        amount: dataBalance,
        decimals: decimals,
      });
    }
  }, [decimals, dataBalance, onChange]);

  return (
    <Field label='Amount'>
      <InputGroup
        flex='1'
        endElement={
          <Button
            size='xs'
            variant='ghost'
            onClick={setMax}
            loading={isPendingBalance}
          >
            Max {formatAmount(dataBalance ?? 0n)}
          </Button>
        }
        width={'full'}
      >
        <Input
          placeholder='0.0'
          type='number'
          value={formatAmount(defaultParams?.amount)}
          onChange={(event) => {
            onChange({
              amount: parseAmount(event.target.value),
              decimals: decimals,
            });
          }}
          disabled={!asset}
        />
      </InputGroup>
    </Field>
  );
}
