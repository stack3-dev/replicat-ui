import { toaster } from '@/components/ui/toaster';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useEffect } from 'react';
import { TransactionReceipt } from 'viem';
import {
  useChainId,
  useSimulateContract,
  UseSimulateContractParameters,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

type WriteContractButtonProps = ButtonProps & {
  params: UseSimulateContractParameters;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
};

export function EvmWriteContractButton(props: WriteContractButtonProps) {
  const {
    disabled,
    params: simulate,
    onTransactionSuccess,
    ...buttonProps
  } = props;

  const accountChainId = useChainId();

  const {
    isPending: isPendingSwitchChain,
    error: errorSwitchChain,
    switchChainAsync,
  } = useSwitchChain();

  const {
    data: dataSimulateCreate,
    isPending: isPendingSimulate,
    isSuccess: isSuccessSimulate,
    error: errorSimulate,
  } = useSimulateContract(simulate);

  const {
    data: dataWrite,
    isPending: isPendingWrite,
    error: errorWrite,
    writeContractAsync,
  } = useWriteContract();

  const {
    data: dataReceipt,
    isLoading: isConfirming,
    isSuccess: isSuccessReceipt,
    error: errorWaitReceipt,
  } = useWaitForTransactionReceipt({
    chainId: simulate.chainId,
    hash: dataWrite,
    confirmations: 3,
  });

  const handleChain = async (): Promise<boolean> => {
    if (simulate.chainId && accountChainId !== simulate.chainId) {
      const result = await switchChainAsync({ chainId: simulate.chainId });
      if (result.id === simulate.chainId) {
        return true;
      }
    } else {
      return true;
    }
    return false;
  };

  const handleWrite = async (): Promise<boolean> => {
    const hash = await writeContractAsync(dataSimulateCreate!.request);
    if (hash) {
      return true;
    }
    return false;
  };

  const handleClick = async () => {
    try {
      return (await handleChain()) && (await handleWrite());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isSuccessReceipt && onTransactionSuccess) {
      onTransactionSuccess(dataReceipt!);
    }
  }, [isSuccessReceipt, onTransactionSuccess, dataReceipt]);

  useEffect(() => {
    const error =
      errorSimulate ?? errorSwitchChain ?? errorWrite ?? errorWaitReceipt;
    if (error) {
      console.error(error);
      toaster.create({
        title: 'Error',
        description:
          "Couldn't write contract. If the problem persists, please contact support.",
        type: 'error',
      });
    }
  }, [errorSimulate, errorSwitchChain, errorWrite, errorWaitReceipt]);

  const disabledButton =
    disabled ||
    !isSuccessSimulate ||
    isPendingSimulate ||
    isPendingWrite ||
    isConfirming;

  const isPending =
    isPendingSimulate || isPendingWrite || isConfirming || isPendingSwitchChain;

  const loadingText = isPendingSimulate
    ? 'Loading...'
    : isPendingSwitchChain
    ? 'Switch Network...'
    : isPendingWrite
    ? 'Sending...'
    : isConfirming
    ? 'Waiting confirmations...'
    : undefined;

  return (
    <Button
      loading={isPending}
      loadingText={loadingText}
      disabled={disabledButton}
      onClick={handleClick}
      {...buttonProps}
    ></Button>
  );
}
