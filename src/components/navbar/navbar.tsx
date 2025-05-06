import { Box, Button, Center, Flex, Link, Stack } from '@chakra-ui/react';
import AccountConnectButton from '../account/account-connect-button';
import { useAccount } from 'wagmi';
import { AccountDrawer } from '../account/account-drawer';
import ChainIcon from '../chains/chain-icon';
import { shortenAddress } from '@/utils/format';
import { HomeLogo } from './home-logo';
import { zeroAddress } from 'viem';
import { chainById } from '@/config/chains';

export default function Navbar() {
  const account = useAccount();
  const chain = chainById(account.chainId);

  return (
    <>
      <Box px={4}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Flex gap={10} alignItems={'center'}>
            <HomeLogo />
            <Center>
              <Link
                variant={'underline'}
                href='https://replicat-docs.stack3.dev'
              >
                Docs
              </Link>
            </Center>
          </Flex>

          <Flex alignItems='center'>
            <Stack direction='row'>
              {account.isConnected ? (
                <AccountDrawer>
                  <Button variant='surface'>
                    <Flex gap={2} alignItems={'center'}>
                      <ChainIcon
                        bgColor='transparent'
                        border='none'
                        chain={chain!}
                      />
                      <span>
                        {shortenAddress(account.address ?? zeroAddress)}
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
