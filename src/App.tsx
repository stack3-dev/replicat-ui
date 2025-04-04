import { Box, VStack } from '@chakra-ui/react';
import Navbar from './components/navbar/navbar';
import Bridge from './components/bridge/common/bridge';
import './App.css';
import { Toaster } from './components/ui/toaster';

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
        <Box textAlign='center' fontSize='xl' pt='30vh'>
          <VStack gap='8'>
            <Bridge
            // defaultAsset={defaultAsset}
            // defaultFrom={defaultAccount}
            // defaultTo={defaultAccount}
            />
          </VStack>
        </Box>
      </Box>
      <Toaster />
    </>
  );
}

export default App;
