import { ButtonProps } from '@chakra-ui/react';
import { Hex, parseSignature, Signature } from 'viem';
import { EvmSignTypedDataButton } from './evm-sign-typed-data-button';
import { PermitTypedData } from '@/types/eip712';
import {
  useReadErc20PermitEip712Domain,
  useReadErc20PermitNonces,
} from '@/generated/wagmi/wagmi';
import { SignTypedDataVariables } from 'wagmi/query';

export default function EvmErc20PermitButton(
  props: {
    token: Hex;
    amount: bigint;
    deadline: bigint;
    owner: Hex;
    spender: Hex;
    chainId: number;
    onChange: (signature: Signature) => void;
  } & Omit<ButtonProps, 'onChange'>
) {
  const {
    token,
    amount,
    deadline,
    owner,
    spender,
    chainId,
    onChange,
    ...buttonProps
  } = props;

  const { data: dataEip721Domain, isPending: isPendingEip271Domain } =
    useReadErc20PermitEip712Domain({
      chainId: chainId,
      address: token,
    });

  const { data: dataNonce, isPending: isPendingNonce } =
    useReadErc20PermitNonces({
      chainId: chainId,
      address: token,
      args: [owner],
    });

  const domain = {
    name: dataEip721Domain ? dataEip721Domain[1] : '',
    version: dataEip721Domain ? dataEip721Domain[2] : '',
    chainId: dataEip721Domain ? dataEip721Domain[3] : 0,
    verifyingContract: dataEip721Domain ? dataEip721Domain[4] : '0x',
  };

  const message = {
    spender: spender,
    value: amount,
    owner: owner,
    nonce: dataNonce ?? 0n,
    deadline: deadline,
  };

  const variables: SignTypedDataVariables = {
    domain,
    types: PermitTypedData,
    primaryType: 'Permit',
    message,
  };

  return (
    <EvmSignTypedDataButton
      disabled={isPendingEip271Domain || isPendingNonce}
      variables={variables}
      onChange={(sig) => {
        onChange(parseSignature(sig));
      }}
      {...buttonProps}
    />
  );
}
