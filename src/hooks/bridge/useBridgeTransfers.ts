import { graphql } from '@/generated/gql';
import request from 'graphql-request';
import { graphUrl } from '@/config/thegraph';
import { useQuery } from '@tanstack/react-query';
import { Hex } from 'viem';
import { AssetType } from '@/types/types';
import { Chain } from '@/config/chains';

const transfersQuery = graphql(/* GraphQL */ `
  query transfersQuery($addressFrom: Bytes!, $addressTo: Bytes) {
    transfereds(
      where: { or: [{ data_from: $addressFrom }, { data_to: $addressTo }] }
    ) {
      id
      transferHash
      transactionHash
      data_assetType
      data_assetHash
      data_from
      data_to
      data_chainBid
      data_params
      data_nonce
    }
  }
`);

export type Transfer = {
  transferHash: Hex;
  transactionHash: Hex;
  assetType: AssetType;
  assetHash: Hex;
  from: Hex;
  to: Hex;
  chainBid: number;
  params: Hex;
  nonce: string;
};

const fetchBridgeTransfers = async (
  chain: Chain,
  address: Hex
): Promise<Transfer[]> => {
  const result = await request(graphUrl(chain), transfersQuery, {
    addressFrom: address,
    addressTo: address,
  });

  return result.transfereds.map((transfer) => ({
    transferHash: transfer.transferHash,
    transactionHash: transfer.transactionHash,
    assetType: transfer.data_assetType,
    assetHash: transfer.data_assetHash,
    from: transfer.data_from,
    to: transfer.data_to,
    chainBid: transfer.data_chainBid,
    params: transfer.data_params,
    nonce: transfer.data_nonce,
  }));
};

export const useBridgeTransfers = ({
  address,
  enabled,
  chain,
}: {
  address: Hex;
  chain: Chain;
  enabled: boolean;
}) => {
  const result = useQuery({
    queryKey: ['bridge-transfer', address, { chainId: chain.id }],
    queryFn: async () => await fetchBridgeTransfers(chain, address),
    enabled: enabled,
  });

  return result;
};
