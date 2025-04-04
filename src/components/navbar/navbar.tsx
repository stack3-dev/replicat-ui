import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import AccountConnectButton from '../account/account-connect-button';
import { useAccount } from 'wagmi';
import { AccountDrawer } from '../account/account-drawer';
import ChainIcon from '../chains/chain-icon';
import { safeAddress, shortenAddress } from '@/utils/format';
import { HomeLogo } from './home-logo';

export default function Navbar() {
  const account = useAccount();

  return (
    <>
      <Box px={4}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <HomeLogo />

          <Flex alignItems='center'>
            <Stack direction='row'>
              {account.isConnected ? (
                <AccountDrawer>
                  <Button variant='surface'>
                    <Flex gap={2} alignItems={'center'}>
                      <ChainIcon
                        bgColor='transparent'
                        border='none'
                        chainBid={account.chainId!}
                      />
                      <span>
                        {shortenAddress(
                          safeAddress(account.address),
                          account.chainId
                        )}
                      </span>
                    </Flex>
                  </Button>
                </AccountDrawer>
              ) : (
                <AccountConnectButton>Connect Wallet</AccountConnectButton>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
