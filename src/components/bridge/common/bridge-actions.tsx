import { Asset, Transfer, TransferParamsFT } from '@/types/types';
import FtTransferDialog from '../../assets/ft/ft-transfer-dialog.tsx';
import FtCreateReplicaDialog from '../../assets/create-replica-dialog.tsx';
import { Alert, Button } from '@chakra-ui/react';
import { TransactionReceipt } from 'viem';
import { hashAsset } from '@/utils/encoding.ts';
import { useBridgeReplicaByHash } from '@/hooks/bridge/useBridgeReplicaByHash.ts';
import { Chain } from '@/config/chains.ts';

export default function BridgeActions({
  transfer,
  onTransactionSuccess,
}: {
  transfer: Transfer;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
}) {
  const assetHash = hashAsset(transfer.asset);

  const {
    data: replicaFrom,
    isPending: isPendingFrom,
    refetch: refetchFrom,
  } = useBridgeReplicaByHash({
    chain: transfer.from.chain,
    assetHash,
  });

  const {
    data: replicaTo,
    isPending: isPendingTo,
    refetch: refetchTo,
  } = useBridgeReplicaByHash({
    chain: transfer.to.chain,
    assetHash,
  });

  const isSameChains = transfer.from.chain.id === transfer.to.chain.id;

  const isTransferParamsValid =
    (transfer.params as TransferParamsFT).amount > 0n;

  return (
    <>
      <FtTransferDialog
        transfer={transfer}
        onTransactionSuccess={onTransactionSuccess}
      >
        <Button
          width='full'
          loading={isPendingFrom || isPendingTo}
          disabled={
            !replicaFrom || !replicaTo || isSameChains || !isTransferParamsValid
          }
        >
          Transfer
        </Button>
      </FtTransferDialog>

      {isSameChains && (
        <Alert.Root status='error'>
          <Alert.Indicator />
          <Alert.Title>
            You must select different chains to transfer the asset.
          </Alert.Title>
        </Alert.Root>
      )}

      {!isPendingFrom && !replicaFrom ? (
        <ReplicaCreateAlert
          chain={transfer.from.chain}
          asset={transfer.asset}
          onTransactionSuccess={() => refetchFrom()}
        />
      ) : !isPendingTo && !replicaTo ? (
        <ReplicaCreateAlert
          chain={transfer.to.chain}
          asset={transfer.asset}
          onTransactionSuccess={() => refetchTo()}
        />
      ) : null}
    </>
  );
}

function ReplicaCreateAlert({
  chain,
  asset,
  onTransactionSuccess,
}: {
  chain: Chain;
  asset: Asset;
  onTransactionSuccess?: (receip: TransactionReceipt) => void;
}) {
  return (
    <Alert.Root status='warning'>
      <Alert.Indicator />
      <Alert.Title>
        The token is not yet bridged on chain '{chain.name}'.
      </Alert.Title>
      <FtCreateReplicaDialog
        asset={asset}
        chain={chain}
        onTransactionSuccess={onTransactionSuccess}
      >
        <Button>Bridge Now</Button>
      </FtCreateReplicaDialog>
    </Alert.Root>
  );
}
