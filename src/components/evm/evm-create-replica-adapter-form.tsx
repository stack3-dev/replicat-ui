import { Asset, MetadataFT } from '@/types/types';
import { ButtonProps } from '@chakra-ui/react';
import { Hex, TransactionReceipt } from 'viem';
import { EvmWriteContractButton } from './evm-write-contract-button';
import { bridgeAbi } from '@/generated/wagmi/wagmi';
import { encodeMetadataFT } from '@/utils/encoding';
import { chains } from '@/config/chains';

export default function EvmCreateReplicaAdapterButton({
  asset,
  chainBid,
  onTransactionSuccess,
  ...buttonProps
}: {
  asset: Asset;
  chainBid: number;
  onTransactionSuccess?: (receipt: TransactionReceipt) => void;
} & ButtonProps) {
  const targetChainBid = chainBid;

  return (
    <EvmWriteContractButton
      params={{
        abi: bridgeAbi,
        address: chains[targetChainBid].bridgeAddress as Hex,
        functionName: 'createReplicaAdapter',
        chainId: chainBid,
        args: [
          {
            type_: asset.type,
            chainBid: BigInt(asset.chainBid),
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
