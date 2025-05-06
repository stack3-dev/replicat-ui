import { Asset, MetadataFT } from '@/types/types';
import { ButtonProps } from '@chakra-ui/react';
import { Hex, TransactionReceipt } from 'viem';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { bridgeAbi } from '@/generated/wagmi/wagmi';
import { encodeMetadataFT } from '@/utils/encoding';
import { Chain } from '@/config/chains';

export default function EvmCreateReplicaAdapterButton({
  asset,
  chain,
  onTransactionSuccess,
  ...buttonProps
}: {
  asset: Asset;
  chain: Chain;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
} & ButtonProps) {
  return (
    <EvmWriteContractButton
      params={{
        abi: bridgeAbi,
        address: chain.bridgeAddress as Hex,
        functionName: 'createReplicaAdapter',
        chainId: chain.id,
        args: [
          {
            type_: asset.type,
            chainBid: asset.chainBid,
            address_: asset.address,
            metadata: encodeMetadataFT(asset.metadata as MetadataFT),
          },
        ],
      }}
      onTransactionSuccess={onTransactionSuccess}
      {...buttonProps}
    />
  );
}
