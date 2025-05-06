import { useAccountTokenBalances } from '@/hooks/account/useAccountTokenBalances';
import { useFtMetadata } from '@/hooks/assets/ft/useFTMetadata';
import {
  safeAddress,
  shortenAddress,
  toFixedIfNecessary,
} from '@/utils/format';
import {
  Button,
  Center,
  Flex,
  ProgressCircle,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react';
import { formatUnits, Hex, hexToBigInt, zeroAddress } from 'viem';
import { useAccount, useSwitchChain } from 'wagmi';
import { TokenBalance } from 'alchemy-sdk';
import TokenIcon from '../common/token-icon';
import { Tooltip } from '../ui/tooltip';
import { useQueryStates } from 'nuqs';
import { assetQueryState } from '@/queries';
import { useFtLogo } from '@/hooks/assets/ft/useFTLogo';
import AssetDataList from '../assets/asset-data-list';
import { Asset, AssetType } from '@/types/types';
import { zeroAsset } from '@/utils/asset';
import { ReplicaTLogo } from '../common/replicat-logo';
import { hashAsset } from '@/utils/encoding';
import { useBridgeReplicaByAddress } from '@/hooks/bridge/useBridgeReplicaByAddress';
import { useBridgeReplicaByHash } from '@/hooks/bridge/useBridgeReplicaByHash';
import { Chain, chainByBid, chainById } from '@/config/chains';
import { zeroBytes32 } from '@/utils/constants';

export const AccountTokens = () => {
  const account = useAccount();
  const chain = chainById(account.chainId)!;

  const accountTokenBalances = useAccountTokenBalances({
    address: account.address ?? zeroAddress,
    chain: chain,
    enabled: true,
  });

  return (
    <Stack gap={2}>
      {accountTokenBalances.isPending && (
        <Center pt='8'>
          <ProgressCircle.Root value={null} size='sm'>
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>
        </Center>
      )}

      {accountTokenBalances.data && (
        <AccountChainToken
          chain={accountTokenBalances.data.chain}
          tokenBalances={accountTokenBalances.data.tokenBalances}
        />
      )}
    </Stack>
  );
};

export const AccountChainToken = ({
  chain,
  tokenBalances,
}: {
  chain: Chain;
  tokenBalances: TokenBalance[];
}) => {
  return (
    <Stack gap={4} p={2}>
      {tokenBalances.map((balance) => (
        <AccountToken
          key={'account-token-' + chain.id + '-' + balance.contractAddress}
          contractAddress={safeAddress(balance.contractAddress)}
          balance={hexToBigInt(
            (balance.tokenBalance as Hex | null) ?? zeroAddress
          )}
          chain={chain}
        />
      ))}
    </Stack>
  );
};

export const AccountToken = ({
  balance,
  contractAddress,
  chain,
}: {
  balance: bigint;
  contractAddress: Hex;
  chain: Chain;
}) => {
  const { switchChain } = useSwitchChain();

  const { data: dataMetadata, isLoading: isLoadingMetadata } = useFtMetadata({
    chain,
    address: contractAddress,
  });

  const { data: dataLogo, isLoading: isLoadingLogo } = useFtLogo({
    chain,
    address: contractAddress,
  });

  const asset: Asset | undefined = dataMetadata
    ? {
        address: contractAddress,
        chainBid: chain.bridgeId,
        type: AssetType.FT,
        metadata: {
          name: dataMetadata.name,
          symbol: dataMetadata.symbol,
          decimals: dataMetadata.decimals,
        },
      }
    : zeroAsset;

  const assetHash = asset ? hashAsset(asset) : zeroBytes32;

  const { data: dataReplicaByHash, isPending: isPendingReplicaByHash } =
    useBridgeReplicaByHash({
      assetHash: assetHash,
      chain,
      enabled: !!asset,
    });

  const { data: dataReplicaByAddress, isPending: isPendingReplicaByAddress } =
    useBridgeReplicaByAddress({
      address: contractAddress,
      chain,
      enabled: !!asset,
    });

  const [, setQuery] = useQueryStates(assetQueryState);

  const replica = dataReplicaByHash ?? dataReplicaByAddress;

  const onClick = () => {
    if (replica) {
      setQuery({
        address: replica.asset.address,
        chainBid: replica.asset.chainBid,
      });
    } else {
      setQuery({
        address: contractAddress,
        chainBid: chain.bridgeId,
      });
    }
    switchChain({
      chainId: chain.id,
    });
  };

  const isLoading =
    isLoadingLogo ||
    isLoadingMetadata ||
    isPendingReplicaByHash ||
    isPendingReplicaByAddress;

  return (
    <Button
      variant={replica ? 'outline' : 'ghost'}
      w={'full'}
      justifyContent={'space-between'}
      onClick={onClick}
      disabled={isLoading}
      loading={isLoading}
    >
      <Flex gap={2} alignItems={'center'}>
        {replica && (
          <Tooltip
            content={
              <Stack gap={2} p={2}>
                <Text fontSize={'sm'} fontWeight={'semibold'}>
                  Origin chain : '{chainByBid(replica.asset.chainBid)?.name}'
                </Text>
                <Separator />
                <AssetDataList asset={replica.asset} />
              </Stack>
            }
          >
            <ReplicaTLogo />
          </Tooltip>
        )}
        {dataLogo && <TokenIcon logo={dataLogo} noChainIcon />}
        <Text whiteSpace={'nowrap'}>
          {dataMetadata?.name ?? shortenAddress(contractAddress, 4)}
        </Text>
      </Flex>
      <Flex wrap={'nowrap'} gap={2}>
        <Text fontSize={'sm'} truncate>
          {toFixedIfNecessary(
            formatUnits(balance, dataMetadata?.decimals ?? 0)
          )}
        </Text>
        <Text fontSize={'sm'} fontWeight={'semibold'} truncate>
          {dataMetadata?.symbol}
        </Text>
      </Flex>
    </Button>
  );
};

// export const AccountChainTokenCollapsible = ({
//   chainBid,
//   tokenBalances,
// }: {
//   chainBid: number;
//   tokenBalances: TokenBalance[];
// }) => {
//   const account = useAccount();
//   const [open, setOpen] = useState(account.chainId === chainBid);

//   return (
//     <Collapsible.Root open={open} onOpenChange={(v) => setOpen(v.open)}>
//       <Collapsible.Trigger asChild>
//         <Button w='full' variant={'surface'} justifyContent={'space-between'}>
//           <Flex gap={2} alignItems={'center'}>
//             <ChainIcon variant='ghost' chainBid={chainBid} />
//             {getChainName(chainBid)}
//           </Flex>
//           <Flex gap={2} alignItems={'center'}>
//             <Tooltip content={getChainName(chainBid)}>
//               <LuInfo />
//             </Tooltip>
//             {open ? <LuChevronUp /> : <LuChevronDown />}
//           </Flex>
//         </Button>
//       </Collapsible.Trigger>
//       <Collapsible.Content>
//         <AccountChainToken chainBid={chainBid} tokenBalances={tokenBalances} />
//         <Separator />
//       </Collapsible.Content>
//     </Collapsible.Root>
//   );
// };
