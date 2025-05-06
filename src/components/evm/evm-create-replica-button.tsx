import { Asset, MetadataFT } from '@/types/types';
import { encodeMetadataFT } from '@/utils/encoding';
import { ButtonProps } from '@chakra-ui/react';
import { Hex, TransactionReceipt } from 'viem';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { bridgeAbi } from '@/generated/wagmi/wagmi';
import { Chain } from '@/config/chains';

export default function EvmCreateReplicaButton({
  asset,
  chain,
  extraArgs,
  onTransactionSuccess,
  ...buttonProps
}: {
  asset: Asset;
  chain: Chain;
  extraArgs?: Hex;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
} & ButtonProps) {
  return (
    <EvmWriteContractButton
      params={{
        abi: bridgeAbi,
        address: chain.bridgeAddress as Hex,
        functionName: 'createReplica',
        chainId: chain.id,
        args: [
          {
            type_: asset.type,
            chainBid: asset.chainBid,
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
