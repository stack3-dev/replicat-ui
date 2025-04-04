import { ReplicatChainBidsType, ReplicatChains } from '@/config/bridge';
import { Asset, MetadataFT } from '@/types/types';
import { encodeMetadataFT } from '@/utils/encoding';
import { ButtonProps } from '@chakra-ui/react';
import { Hex, TransactionReceipt } from 'viem';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { bridgeAbi } from '@/generated/wagmi/wagmi';

export default function EvmCreateReplicaButton({
  asset,
  chainBid,
  extraArgs,
  onTransactionSuccess,
  ...buttonProps
}: {
  asset: Asset;
  chainBid: number;
  extraArgs?: Hex;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
} & ButtonProps) {
  const targetChainBid = chainBid as ReplicatChainBidsType;

  return (
    <EvmWriteContractButton
      params={{
        abi: bridgeAbi,
        address: ReplicatChains[targetChainBid].bridgeAddress as Hex,
        functionName: 'createReplica',
        chainId: chainBid,
        args: [
          {
            type_: asset.type,
            chainBid: BigInt(asset.chainBid),
            address_: asset.address,
            metadata: encodeMetadataFT(asset.metadata as MetadataFT),
          },
          extraArgs ?? '0x',
        ],
      }}
      onTransactionSuccess={onTransactionSuccess}
      {...buttonProps}
    />
  );
}
