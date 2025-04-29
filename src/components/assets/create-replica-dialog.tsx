import { Asset, AssetType } from '@/types/types';
import { Alert, Button, Center, Stack, Text } from '@chakra-ui/react';
import {
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogBody,
  DialogFooter,
  DialogActionTrigger,
  DialogCloseTrigger,
} from '../ui/dialog';
import { TransactionReceipt } from 'viem';
import AssetDataList from './asset-data-list';
import EvmCreateReplicaAdapterButton from '../evm/evm-create-replica-adapter-form';
import EvmCreateReplicaButton from '../evm/evm-create-replica-button';
import { useCallback, useState } from 'react';
import TransactionSuccess from '@/components/common/transaction-success';
import { chains } from '@/config/chains';

export default function FtCreateReplicaDialog(props: {
  asset: Asset;
  chainBid: number;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
  children?: React.ReactNode;
}) {
  const {
    asset,
    chainBid,
    onTransactionSuccess: onTransactionSuccessParent,
    children,
  } = props;
  const [transactionReceipt, setTransactionReceipt] =
    useState<TransactionReceipt>();

  const chain = chains[chainBid];
  const targetChainBid = chainBid;
  const isLocalChain = chainBid === asset.chainBid;

  const onTransactionSuccess = useCallback(
    (receipt: TransactionReceipt) => {
      setTransactionReceipt(receipt);
      onTransactionSuccessParent?.(receipt);
    },
    [onTransactionSuccessParent, setTransactionReceipt]
  );

  return (
    <DialogRoot
      size='md'
      placement='center'
      lazyMount
      onOpenChange={() => {
        setTransactionReceipt(undefined);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Replica</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack gap='4' className='relative'>
            {!transactionReceipt && (
              <>
                <AssetDataList asset={asset} />
                {chain.isEvm ? (
                  <>
                    {asset.type === AssetType.FT && (
                      <>
                        {isLocalChain ? (
                          <>
                            <Alert.Root status='info'>
                              <Alert.Indicator />
                              <Alert.Title>
                                You are about to create an <b>ERC20</b> Adapter
                                on network '<b>{chains[targetChainBid].name}</b>
                                '.
                              </Alert.Title>
                            </Alert.Root>

                            <EvmCreateReplicaAdapterButton
                              asset={asset}
                              chainBid={chainBid}
                              onTransactionSuccess={onTransactionSuccess}
                            >
                              Create Adapter
                            </EvmCreateReplicaAdapterButton>
                          </>
                        ) : (
                          <>
                            <Alert.Root status='info'>
                              <Alert.Indicator />
                              <Alert.Title>
                                You are about to create an <b>RERC20</b> Replica
                                on network '<b>{chains[targetChainBid].name}</b>
                                '.
                              </Alert.Title>
                            </Alert.Root>
                            <EvmCreateReplicaButton
                              asset={asset}
                              chainBid={chainBid}
                              onTransactionSuccess={onTransactionSuccess}
                            >
                              Create Replica
                            </EvmCreateReplicaButton>
                          </>
                        )}
                      </>
                    )}

                    {asset.type === AssetType.XFT && (
                      <>
                        {chains[chainBid].isSuperchain ? (
                          <>
                            <Alert.Root status='info'>
                              <Alert.Indicator />
                              <Alert.Title>
                                You are about to create an <b>xERC20</b> Adapter
                                on network '<b>{chains[targetChainBid].name}</b>
                                '. You must ensure that the bridge{' '}
                                {chains[targetChainBid].bridgeAddress} allowed
                                to mint and burn tokens (see our documentation
                                for more details).
                              </Alert.Title>
                            </Alert.Root>
                            <EvmCreateReplicaAdapterButton
                              asset={asset}
                              chainBid={chainBid}
                              onTransactionSuccess={onTransactionSuccess}
                            >
                              Create Adapter
                            </EvmCreateReplicaAdapterButton>
                          </>
                        ) : (
                          <>
                            <Alert.Root status='info'>
                              <Alert.Indicator />
                              <Alert.Title>
                                You are about to create an <b>RERC20</b> Replica
                                on network '<b>{chains[targetChainBid].name}</b>
                                '.
                              </Alert.Title>
                            </Alert.Root>
                            <EvmCreateReplicaButton
                              asset={asset}
                              chainBid={chainBid}
                              onTransactionSuccess={onTransactionSuccess}
                            >
                              Create Replica
                            </EvmCreateReplicaButton>
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Text>Chain not yet supported</Text>
                  </>
                )}
              </>
            )}

            {transactionReceipt && (
              <Center>
                <TransactionSuccess
                  hash={transactionReceipt.transactionHash}
                  chainBid={chainBid}
                />
              </Center>
            )}
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant='outline'>
              {transactionReceipt ? 'Close' : 'Cancel'}
            </Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
