import { Asset, Transfer, TransferParamsFT } from '@/types/types';
import FtTransferDialog from '../../assets/ft/ft-transfer-dialog.tsx';
import { ReplicatChains, ReplicatEvmChainBidsType } from '@/config/bridge';
import FtCreateReplicaDialog from '../../assets/create-replica-dialog.tsx';
import { Alert, Button } from '@chakra-ui/react';
import { TransactionReceipt } from 'viem';
import { hashAsset } from '@/utils/encoding.ts';
import { useBridgeReplicaByHash } from '@/hooks/bridge/useBridgeReplicaByHash.ts';

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
    chainBid: transfer.from.chainBid as ReplicatEvmChainBidsType,
    assetHash,
  });

  const {
    data: replicaTo,
    isPending: isPendingTo,
    refetch: refetchTo,
  } = useBridgeReplicaByHash({
    chainBid: transfer.to.chainBid as ReplicatEvmChainBidsType,
    assetHash,
  });

  const isSameChains = transfer.from.chainBid === transfer.to.chainBid;

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
          chainBid={transfer.from.chainBid}
          asset={transfer.asset}
          onTransactionSuccess={() => refetchFrom()}
        />
      ) : !isPendingTo && !replicaTo ? (
        <ReplicaCreateAlert
          chainBid={transfer.to.chainBid}
          asset={transfer.asset}
          onTransactionSuccess={() => refetchTo()}
        />
      ) : null}
    </>
  );
}

function ReplicaCreateAlert({
  chainBid,
  asset,
  onTransactionSuccess,
}: {
  chainBid: number;
  asset: Asset;
  onTransactionSuccess?: (receip: TransactionReceipt) => void;
}) {
  return (
    <Alert.Root status='warning'>
      <Alert.Indicator />
      <Alert.Title>
        The token is not yet bridged on chain '
        {ReplicatChains[chainBid as ReplicatEvmChainBidsType].name}'.
      </Alert.Title>
      <FtCreateReplicaDialog
        asset={asset}
        chainBid={chainBid}
        onTransactionSuccess={onTransactionSuccess}
      >
        <Button>Bridge Now</Button>
      </FtCreateReplicaDialog>
    </Alert.Root>
  );
}
