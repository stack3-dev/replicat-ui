import { Alert, Stack } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';

import FtAssetInput from '../../assets/ft/ft-asset-input';
import AccountInput from '../../account/account-input';
import { Account, Asset, TransferParamsFT } from '@/types/types';
import { useState } from 'react';
import FtTransferParamsInput from '../../assets/ft/ft-transfer-params-input';
import BridgeActions from './bridge-actions';
import { getNonce } from '@/utils/math';
import { useQueryClient } from '@tanstack/react-query';

export default function Bridge() {
  const [asset, setAsset] = useState<Asset>();
  const [from, setFrom] = useState<Account>();
  const [to, setTo] = useState<Account>();
  const [params, setParams] = useState<TransferParamsFT>({
    amount: 0n,
    decimals: 6,
  });
  const [nonce, setNonce] = useState<bigint>(getNonce());

  const queryClient = useQueryClient();

  return (
    <Stack gap='4'>
      <Field label='Asset'>
        <FtAssetInput asset={asset} onChange={setAsset} />
      </Field>

      <Field label='From'>
        <AccountInput account={from} onChange={setFrom} />
      </Field>

      <Field label='To'>
        <AccountInput account={to} onChange={setTo} />
      </Field>

      {!asset && (
        <Alert.Root status='info'>
          <Alert.Indicator />
          <Alert.Title>Please, select an asset to bridge.</Alert.Title>
        </Alert.Root>
      )}

      {asset && !from && (
        <Alert.Root status='info'>
          <Alert.Indicator />
          <Alert.Title>Please, select a source account.</Alert.Title>
        </Alert.Root>
      )}

      {asset && from && (
        <FtTransferParamsInput
          asset={asset}
          from={from}
          defaultParams={params}
          onChange={setParams}
        />
      )}

      {asset && from && !to && (
        <Alert.Root status='info'>
          <Alert.Indicator />
          <Alert.Title>Please, select a destination account.</Alert.Title>
        </Alert.Root>
      )}

      {asset && from && to && (
        <BridgeActions
          transfer={{
            asset: asset,
            from,
            to,
            params: params,
            nonce: nonce,
          }}
          onTransactionSuccess={() => {
            setNonce(getNonce());
            queryClient.invalidateQueries({ queryKey: ['readContract'] });
          }}
        />
      )}
    </Stack>
  );
}
