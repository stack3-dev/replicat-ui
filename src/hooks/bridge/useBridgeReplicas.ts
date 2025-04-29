import { graphUrl } from '@/config/thegraph';
import { graphql } from '@/generated/gql';
import { Replica } from '@/types/types';
import { decodeMetadataFT } from '@/utils/encoding';
import { safeAddress } from '@/utils/format';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

const replicasQuery = graphql(/* GraphQL */ `
  query replicasQuery {
    replicaCreateds {
      id
      hash
      address_
      creator
      assetData_type_
      assetData_chainBid
      assetData_address_
      assetData_metadata
    }

    replicaAdapterCreateds {
      id
      hash
      address_
      creator
      assetData_type_
      assetData_chainBid
      assetData_address_
      assetData_metadata
    }
  }
`);

const fetchBridgeReplicas = async (chainBid: number): Promise<Replica[]> => {
  const result = await request(graphUrl(chainBid), replicasQuery, {});

  return [...result.replicaCreateds, ...result.replicaAdapterCreateds].map(
    (replica) => ({
      address: safeAddress(replica.address_),
      chainBid: parseInt(replica.assetData_chainBid),
      creator: safeAddress(replica.creator),
      assetHash: replica.hash,
      asset: {
        type: replica.assetData_type_,
        chainBid: parseInt(replica.assetData_chainBid),
        address: safeAddress(replica.assetData_address_),
        metadata: decodeMetadataFT(replica.assetData_metadata),
      },
    })
  );
};

export const useBridgeReplicas = ({
  chainBid,
  enabled = true,
}: {
  chainBid: number;
  enabled: boolean;
}) => {
  return useQuery({
    queryKey: ['bridge-replicas', { chainBid }],
    queryFn: async () => await fetchBridgeReplicas(chainBid),
    enabled,
  });
};
