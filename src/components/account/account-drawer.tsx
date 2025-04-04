import {
  Center,
  CloseButton,
  Drawer,
  Flex,
  Portal,
  Separator,
  Stack,
  Tabs,
} from '@chakra-ui/react';
import { useAccount, useSwitchChain } from 'wagmi';
import { ColorModeButton } from '../ui/color-mode';
import AccountDisconnectButton from './account-disconnect-button';
import { LuActivity, LuCoins, LuIdCard, LuLogOut } from 'react-icons/lu';
import { AccountTokens } from './account-tokens';
import ChainInput from '../chains/chain-input';
import AccountBadge from './account-badge';
import { zeroBytes32 } from '@/utils/constants';
import { AccountActivity } from './account-activity';
import { toaster } from '../ui/toaster';
import { useEffect } from 'react';

export const AccountDrawer = ({ children }: { children: React.ReactNode }) => {
  const account = useAccount();
  const { switchChain, error } = useSwitchChain();

  useEffect(() => {
    if (error) {
      console.error(error);
      toaster.create({
        title: 'Error',
        description: 'Could not switch chain. Please try again later.',
        type: 'error',
      });
    }
  }, [error]);

  return (
    <Drawer.Root size='sm'>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Flex
                width='full'
                mr={6}
                gap={2}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Drawer.Title>Account</Drawer.Title>
                <AccountDisconnectButton variant={'ghost'}>
                  <LuLogOut />
                </AccountDisconnectButton>
                <ColorModeButton />
              </Flex>
            </Drawer.Header>
            <Drawer.Body>
              <Stack gap={4}>
                <Center>
                  <AccountBadge
                    alignSelf={'center'}
                    size='lg'
                    account={{
                      address: account.address ?? zeroBytes32,
                      chainBid: account.chainId ?? 0,
                    }}
                  />
                </Center>
                <ChainInput
                  chainBid={account.chainId}
                  onChange={(chainBid) => switchChain({ chainId: chainBid })}
                />

                <Separator />

                <Tabs.Root defaultValue='fts'>
                  <Tabs.List>
                    <Tabs.Trigger value='fts'>
                      <LuCoins />
                      FTs
                    </Tabs.Trigger>
                    <Tabs.Trigger value='nfts' disabled>
                      <LuIdCard />
                      NFTs
                    </Tabs.Trigger>
                    <Tabs.Trigger value='activity'>
                      <LuActivity />
                      Activity
                    </Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value='fts'>
                    <AccountTokens />
                  </Tabs.Content>
                  <Tabs.Content value='nfts'>NFTs</Tabs.Content>
                  <Tabs.Content value='activity'>
                    <AccountActivity />
                  </Tabs.Content>
                </Tabs.Root>
              </Stack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
