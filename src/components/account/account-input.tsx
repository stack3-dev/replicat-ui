import { Account, Asset } from '@/types/types';

import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button, Flex, Input, Stack, Text } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';
import { Field } from '../ui/field';
import { useEffect, useState } from 'react';
import ChainInput from '../chains/chain-input';
import ChainIcon from '../chains/chain-icon';
import { safeAddress, shortenAddress } from '@/utils/format';
import { useAccount } from 'wagmi';
import { chainById } from '@/config/chains';

export default function AccountInput({
  account,
  assetFilter,
  onChange,
}: {
  account: Account | undefined;
  assetFilter?: Asset;
  onChange: (account: Account) => void;
}) {
  const wallet = useAccount();

  const defaultChain = chainById(wallet.chainId);
  const defaultAddress = account?.address ?? wallet.address ?? '';

  const [address, setAddress] = useState(defaultAddress);
  const [chain, setChain] = useState(defaultChain);

  useEffect(() => {
    if (address && chain) {
      onChange({ address: safeAddress(address), chain });
    }
  }, [address, chain, onChange]);

  useEffect(() => {
    if (account?.address && !address) {
      setAddress(account.address);
    }
    if (account?.chain && !chain) {
      setChain(chainById(account.chain.id));
    }
  }, [wallet]);

  return (
    <PopoverRoot positioning={{ sameWidth: true }}>
      <PopoverTrigger asChild>
        <Button size='2xl' variant='outline' width='sm'>
          <Flex flex='1' gap='2' justify='space-between' align='center'>
            {account && <ChainIcon chain={account.chain} boxSize={'30px'} />}
            <Text>
              {account?.address
                ? shortenAddress(account.address)
                : 'Select an account...'}
            </Text>
            <LuChevronDown />
          </Flex>
        </Button>
      </PopoverTrigger>
      <PopoverContent width='auto'>
        <PopoverArrow />
        <PopoverBody>
          {/* <InputGroup flex='1' width='full' startElement={<LuSearch />}>
            <Input
              size='sm'
              width='full'
              placeholder="Search an asset (eg. 'ETH', '0xA1..1cE')."
            />
          </InputGroup> */}

          <Stack gap='2'>
            <Field label='Network'>
              <ChainInput
                chain={chain}
                assetFilter={assetFilter}
                onChange={setChain}
              />
            </Field>

            <Field label='Address'>
              <Input
                size='sm'
                width='full'
                placeholder='Asset address (eg. 0x1234...abcd)'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Field>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
