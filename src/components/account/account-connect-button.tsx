import { Button, ButtonProps } from '@chakra-ui/react';
import { injected, useAccount, useConnect } from 'wagmi';

export default function AccountConnectButton(props: ButtonProps) {
  const { isConnected } = useAccount();
  const { connect, isPending } = useConnect();

  return (
    <Button
      onClick={() => connect({ connector: injected() })}
      loading={isPending}
      disabled={isConnected}
      asChild
      {...props}
    />
  );
}
