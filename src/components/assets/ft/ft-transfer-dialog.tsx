import { AssetType, Transfer } from '@/types/types';
import { Button, Center, Separator, Stack } from '@chakra-ui/react';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';
import { TransactionReceipt } from 'viem';
import { useState } from 'react';
import EvmTransferButton from '../../evm/evm-transfer-button';
import FtTransferDataList from './ft-transfer-data-list';
import EvmTransferWithAllowanceOrPermitButton from '@/components/evm/evm-transfer-with-allowance-or-permit-button';
import TransactionSuccess from '@/components/common/transaction-success';

export default function FtTransferDialog(props: {
  transfer: Transfer;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
  children?: React.ReactNode;
}) {
  const {
    transfer,
    onTransactionSuccess: onTransactionSuccessParent,
    children,
  } = props;

  const [transactionReceipt, setTransactionReceipt] =
    useState<TransactionReceipt>();
  const needAllowanceOrPermit =
    transfer.asset.type === AssetType.FT &&
    transfer.asset.chainBid === transfer.from.chainBid;

  const onTransactionSuccess = (receipt: TransactionReceipt) => {
    setTransactionReceipt(receipt);
    onTransactionSuccessParent?.(receipt);
  };

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
          <DialogTitle>Execute transfer</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack gap='4' position='relative'>
            {!transactionReceipt && (
              <>
                <p>You are about execute a crosschain transfer.</p>
                <FtTransferDataList transfer={transfer} />
                <Separator />
                {needAllowanceOrPermit ? (
                  <EvmTransferWithAllowanceOrPermitButton
                    transfer={transfer}
                    onTransactionSuccess={onTransactionSuccess}
                  >
                    Transfer
                  </EvmTransferWithAllowanceOrPermitButton>
                ) : (
                  <EvmTransferButton
                    transfer={transfer}
                    onTransactionSuccess={onTransactionSuccess}
                  >
                    Transfer
                  </EvmTransferButton>
                )}
              </>
            )}
            {transactionReceipt && (
              <Center>
                <TransactionSuccess
                  hash={transactionReceipt.transactionHash}
                  chainBid={transfer.from.chainBid}
                  isLayerZero={true}
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
