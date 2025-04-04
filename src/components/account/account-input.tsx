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
import { isChainBidValid } from '@/utils/chains';

export default function AccountInput({
  account,
  assetFilter,
  onChange,
}: {
  account: Account | undefined;
  assetFilter?: Asset;
  onChange: (account: Account) => void;
}) {
  const { address: accountAddress, chainId: accountChainId } = useAccount();

  const isAccountChainBidValid = isChainBidValid(accountChainId ?? 0);
  const defaultAddress = account?.address ?? accountAddress ?? '';
  const defaultChainBid =
    account?.chainBid ?? isAccountChainBidValid ? accountChainId! : 0;

  const [address, setAddress] = useState(defaultAddress);
  const [chainBid, setChainBid] = useState(defaultChainBid);

  useEffect(() => {
    if (address && chainBid > 0) {
      onChange({ address: safeAddress(address), chainBid });
    }
  }, [address, chainBid, onChange]);

  return (
    <PopoverRoot positioning={{ sameWidth: true }}>
      <PopoverTrigger asChild>
        <Button size='2xl' variant='outline' width='sm'>
          <Flex flex='1' gap='2' justify='space-between' align='center'>
            {account && (
              <ChainIcon chainBid={account.chainBid} boxSize={'30px'} />
            )}
            <Text>
              {account?.address
                ? shortenAddress(account.address, account.chainBid)
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
                chainBid={chainBid}
                assetFilter={assetFilter}
                onChange={setChainBid}
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
