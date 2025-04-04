import { Button, ButtonProps } from '@chakra-ui/react';
import { useAccount, useDisconnect } from 'wagmi';

export default function AccountDisconnectButton(props: ButtonProps) {
  const { isConnected } = useAccount();
  const { disconnect, isPending } = useDisconnect();

  return (
    <Button
      onClick={() => disconnect()}
      loading={isPending}
      disabled={!isConnected}
      {...props}
    />
  );
}
