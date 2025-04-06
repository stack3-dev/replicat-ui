import { Box, Center, VStack } from '@chakra-ui/react';
import Navbar from './components/navbar/navbar';
import Bridge from './components/bridge/common/bridge';
import './App.css';
import { Toaster } from './components/ui/toaster';
import FAQ from './components/common/faq';

function App() {
  // const [{ assetAddress, assetChainBid, assetType }] =
  //   useQueryStates(assetSearchParams);

  // const account = useAccount();

  // let defaultAsset;
  // if (assetAddress && assetChainBid && assetType) {
  //   defaultAsset = {
  //     address: assetAddress,
  //     chainBid: assetChainBid,
  //     type: assetType,
  //   } as Asset;
  // }

  // let defaultAccount;
  // if (account.isConnected) {
  //   defaultAccount = {
  //     address: account.address,
  //     chainBid: account.chainId,
  //   } as Account;
  // }

  return (
    <>
      <Box pos='relative'>
        <Navbar />
        <Center fontSize='xl' pt='15vh'>
          <VStack gap='8' width='sm'>
            <Bridge />
          </VStack>
        </Center>
        <Center fontSize='xl' pt='15vh'>
          <VStack gap='8' width='lg'>
            <FAQ />
          </VStack>
        </Center>
      </Box>
      <Toaster />
    </>
  );
}

export default App;
