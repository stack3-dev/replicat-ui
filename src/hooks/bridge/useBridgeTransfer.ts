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
  const transferHash = ''; // TODO hashTransfer(transfer, targetChainBid);

  const result = useQuery({
    queryKey: [
      'bridge-transfer',
      transferHash,
      { chainId: transfer.from.chain.id },
    ],
    queryFn: async () =>
      request(graphUrl(transfer.from.chain), transferQuery, {
        transferHash,
      }),
    enabled: enabled,
  });

  return result;
};
