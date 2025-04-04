import { ReplicatEvmChainBidsType } from '@/config/bridge';
import { Transfer } from '@/types/types';
import { graphql } from '@/generated/gql';
import request from 'graphql-request';
import { graphUrl } from '@/config/thegraph';
import { useQuery } from '@tanstack/react-query';

const transferQuery = graphql(/* GraphQL */ `
  query transferQuery($transferHash: Bytes!) {
    transfereds(where: { transferHash: $transferHash }) {
      id
      transferHash
    }
  }
`);

export const useBridgeTransfer = ({
  transfer,
  enabled,
}: {
  transfer: Transfer;
  enabled: boolean;
}) => {
  const targetChainBid = transfer.from.chainBid as ReplicatEvmChainBidsType;
  const transferHash = ''; // TODO hashTransfer(transfer, targetChainBid);

  const result = useQuery({
    queryKey: ['bridge-transfer', transferHash, { targetChainBid }],
    queryFn: async () =>
      request(graphUrl(targetChainBid), transferQuery, {
        transferHash,
      }),
    enabled: enabled,
  });

  return result;
};
