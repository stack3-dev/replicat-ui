import { Hex } from 'viem';
import { useChainId, useSignTypedData, useSwitchChain } from 'wagmi';
import { type SignTypedDataVariables } from 'wagmi/query';
import { toaster } from '../ui/toaster';
import { useEffect } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

export function EvmSignTypedDataButton(
  props: {
    variables: SignTypedDataVariables;
    onChange: (signature: Hex) => void;
  } & Omit<ButtonProps, 'onChange'>
) {
  const { variables, disabled, onChange, ...buttonProps } = props;

  const chainId = Number(variables.domain!.chainId);
  const currentChainId = useChainId();

  const {
    isPending: isPendingSwitchChain,
    error: errorSwitchChain,
    switchChainAsync,
  } = useSwitchChain();

  const {
    isPending: isPendingSign,
    error: errorSign,
    signTypedDataAsync,
  } = useSignTypedData();

  const handleClick = async () => {
    if (chainId && currentChainId !== chainId) {
      const result = await switchChainAsync({ chainId: chainId as number });
      if (result.id === chainId) {
        await handleSign();
      }
    } else {
      await handleSign();
    }
  };

  const handleSign = async () => {
    const signature = await signTypedDataAsync(variables);
    if (signature) {
      onChange(signature);
    }
  };

  useEffect(() => {
    const error = errorSign || errorSwitchChain;
    if (error) {
      console.error(error);
      toaster.create({
        title: 'Error',
        description:
          "Couldn't sign EIP712 data. If the error persists, please contact support.",
        type: 'error',
      });
    }
  }, [errorSign, errorSwitchChain]);

  const isPending = isPendingSwitchChain;

  const loadingText = isPendingSwitchChain
    ? 'Switch Network...'
    : isPendingSign
    ? 'Signing...'
    : undefined;

  return (
    <Button
      loading={isPending}
      loadingText={loadingText}
      disabled={disabled}
      onClick={handleClick}
      {...buttonProps}
    ></Button>
  );
}
