/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query replicasQuery {\n    replicaCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n\n    replicaAdapterCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n  }\n": typeof types.ReplicasQueryDocument,
    "\n  query transferQuery($transferHash: Bytes!) {\n    transfereds(where: { transferHash: $transferHash }) {\n      id\n      transferHash\n    }\n  }\n": typeof types.TransferQueryDocument,
    "\n  query transfersQuery($addressFrom: Bytes!, $addressTo: Bytes) {\n    transfereds(\n      where: { or: [{ data_from: $addressFrom }, { data_to: $addressTo }] }\n    ) {\n      id\n      transferHash\n      transactionHash\n      data_assetType\n      data_assetHash\n      data_from\n      data_to\n      data_chainBid\n      data_params\n      data_nonce\n    }\n  }\n": typeof types.TransfersQueryDocument,
};
const documents: Documents = {
    "\n  query replicasQuery {\n    replicaCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n\n    replicaAdapterCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n  }\n": types.ReplicasQueryDocument,
    "\n  query transferQuery($transferHash: Bytes!) {\n    transfereds(where: { transferHash: $transferHash }) {\n      id\n      transferHash\n    }\n  }\n": types.TransferQueryDocument,
    "\n  query transfersQuery($addressFrom: Bytes!, $addressTo: Bytes) {\n    transfereds(\n      where: { or: [{ data_from: $addressFrom }, { data_to: $addressTo }] }\n    ) {\n      id\n      transferHash\n      transactionHash\n      data_assetType\n      data_assetHash\n      data_from\n      data_to\n      data_chainBid\n      data_params\n      data_nonce\n    }\n  }\n": types.TransfersQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query replicasQuery {\n    replicaCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n\n    replicaAdapterCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n  }\n"): (typeof documents)["\n  query replicasQuery {\n    replicaCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n\n    replicaAdapterCreateds {\n      id\n      hash\n      address_\n      creator\n      assetData_type_\n      assetData_chainBid\n      assetData_address_\n      assetData_metadata\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query transferQuery($transferHash: Bytes!) {\n    transfereds(where: { transferHash: $transferHash }) {\n      id\n      transferHash\n    }\n  }\n"): (typeof documents)["\n  query transferQuery($transferHash: Bytes!) {\n    transfereds(where: { transferHash: $transferHash }) {\n      id\n      transferHash\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query transfersQuery($addressFrom: Bytes!, $addressTo: Bytes) {\n    transfereds(\n      where: { or: [{ data_from: $addressFrom }, { data_to: $addressTo }] }\n    ) {\n      id\n      transferHash\n      transactionHash\n      data_assetType\n      data_assetHash\n      data_from\n      data_to\n      data_chainBid\n      data_params\n      data_nonce\n    }\n  }\n"): (typeof documents)["\n  query transfersQuery($addressFrom: Bytes!, $addressTo: Bytes) {\n    transfereds(\n      where: { or: [{ data_from: $addressFrom }, { data_to: $addressTo }] }\n    ) {\n      id\n      transferHash\n      transactionHash\n      data_assetType\n      data_assetHash\n      data_from\n      data_to\n      data_chainBid\n      data_params\n      data_nonce\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;