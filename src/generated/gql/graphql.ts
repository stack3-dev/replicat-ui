/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Eip712DomainChanged = {
  __typename?: 'EIP712DomainChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Eip712DomainChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Eip712DomainChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Eip712DomainChanged_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Eip712DomainChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnershipTransferred = {
  __typename?: 'OwnershipTransferred';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnershipTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  PreviousOwner = 'previousOwner',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  eip712DomainChanged?: Maybe<Eip712DomainChanged>;
  eip712DomainChangeds: Array<Eip712DomainChanged>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  relayerRegistered?: Maybe<RelayerRegistered>;
  relayerRegistereds: Array<RelayerRegistered>;
  replicaAdapterCreated?: Maybe<ReplicaAdapterCreated>;
  replicaAdapterCreateds: Array<ReplicaAdapterCreated>;
  replicaCreated?: Maybe<ReplicaCreated>;
  replicaCreateds: Array<ReplicaCreated>;
  transferFeeUpdated?: Maybe<TransferFeeUpdated>;
  transferFeeUpdateds: Array<TransferFeeUpdated>;
  transferFeesWithdrawn?: Maybe<TransferFeesWithdrawn>;
  transferFeesWithdrawns: Array<TransferFeesWithdrawn>;
  transferReverted?: Maybe<TransferReverted>;
  transferReverteds: Array<TransferReverted>;
  transfered?: Maybe<Transfered>;
  transferedCrosschain?: Maybe<TransferedCrosschain>;
  transferedCrosschains: Array<TransferedCrosschain>;
  transfereds: Array<Transfered>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryEip712DomainChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEip712DomainChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eip712DomainChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Eip712DomainChanged_Filter>;
};


export type QueryOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type QueryRelayerRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRelayerRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RelayerRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RelayerRegistered_Filter>;
};


export type QueryReplicaAdapterCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReplicaAdapterCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReplicaAdapterCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReplicaAdapterCreated_Filter>;
};


export type QueryReplicaCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReplicaCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReplicaCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReplicaCreated_Filter>;
};


export type QueryTransferFeeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferFeeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferFeeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferFeeUpdated_Filter>;
};


export type QueryTransferFeesWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferFeesWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferFeesWithdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferFeesWithdrawn_Filter>;
};


export type QueryTransferRevertedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferRevertedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferReverted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferReverted_Filter>;
};


export type QueryTransferedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferedCrosschainArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferedCrosschainsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferedCrosschain_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferedCrosschain_Filter>;
};


export type QueryTransferedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfered_Filter>;
};

export type RelayerRegistered = {
  __typename?: 'RelayerRegistered';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  relayer: Scalars['Bytes']['output'];
  relayerClass: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RelayerRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RelayerRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RelayerRegistered_Filter>>>;
  relayer?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_gt?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_gte?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayerClass_lt?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_lte?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_not?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayerClass_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  relayer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  relayer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RelayerRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Relayer = 'relayer',
  RelayerClass = 'relayerClass',
  TransactionHash = 'transactionHash'
}

export type ReplicaAdapterCreated = {
  __typename?: 'ReplicaAdapterCreated';
  address_: Scalars['Bytes']['output'];
  assetData_address_: Scalars['Bytes']['output'];
  assetData_chainBid: Scalars['BigInt']['output'];
  assetData_metadata: Scalars['Bytes']['output'];
  assetData_type_: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  hash: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ReplicaAdapterCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address_?: InputMaybe<Scalars['Bytes']['input']>;
  address__contains?: InputMaybe<Scalars['Bytes']['input']>;
  address__gt?: InputMaybe<Scalars['Bytes']['input']>;
  address__gte?: InputMaybe<Scalars['Bytes']['input']>;
  address__in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address__lt?: InputMaybe<Scalars['Bytes']['input']>;
  address__lte?: InputMaybe<Scalars['Bytes']['input']>;
  address__not?: InputMaybe<Scalars['Bytes']['input']>;
  address__not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address__not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ReplicaAdapterCreated_Filter>>>;
  assetData_address_?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_address__lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__not?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_chainBid?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetData_chainBid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetData_metadata?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_metadata_lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_not?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_type_?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__gt?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__gte?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__in?: InputMaybe<Array<Scalars['Int']['input']>>;
  assetData_type__lt?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__lte?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__not?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReplicaAdapterCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ReplicaAdapterCreated_OrderBy {
  Address = 'address_',
  AssetDataAddress = 'assetData_address_',
  AssetDataChainBid = 'assetData_chainBid',
  AssetDataMetadata = 'assetData_metadata',
  AssetDataType = 'assetData_type_',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Creator = 'creator',
  Hash = 'hash',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type ReplicaCreated = {
  __typename?: 'ReplicaCreated';
  address_: Scalars['Bytes']['output'];
  assetData_address_: Scalars['Bytes']['output'];
  assetData_chainBid: Scalars['BigInt']['output'];
  assetData_metadata: Scalars['Bytes']['output'];
  assetData_type_: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  hash: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ReplicaCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address_?: InputMaybe<Scalars['Bytes']['input']>;
  address__contains?: InputMaybe<Scalars['Bytes']['input']>;
  address__gt?: InputMaybe<Scalars['Bytes']['input']>;
  address__gte?: InputMaybe<Scalars['Bytes']['input']>;
  address__in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address__lt?: InputMaybe<Scalars['Bytes']['input']>;
  address__lte?: InputMaybe<Scalars['Bytes']['input']>;
  address__not?: InputMaybe<Scalars['Bytes']['input']>;
  address__not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address__not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ReplicaCreated_Filter>>>;
  assetData_address_?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_address__lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__not?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_address__not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_chainBid?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetData_chainBid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_not?: InputMaybe<Scalars['BigInt']['input']>;
  assetData_chainBid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  assetData_metadata?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_metadata_lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_not?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetData_metadata_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetData_type_?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__gt?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__gte?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__in?: InputMaybe<Array<Scalars['Int']['input']>>;
  assetData_type__lt?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__lte?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__not?: InputMaybe<Scalars['Int']['input']>;
  assetData_type__not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReplicaCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ReplicaCreated_OrderBy {
  Address = 'address_',
  AssetDataAddress = 'assetData_address_',
  AssetDataChainBid = 'assetData_chainBid',
  AssetDataMetadata = 'assetData_metadata',
  AssetDataType = 'assetData_type_',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Creator = 'creator',
  Hash = 'hash',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  eip712DomainChanged?: Maybe<Eip712DomainChanged>;
  eip712DomainChangeds: Array<Eip712DomainChanged>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  relayerRegistered?: Maybe<RelayerRegistered>;
  relayerRegistereds: Array<RelayerRegistered>;
  replicaAdapterCreated?: Maybe<ReplicaAdapterCreated>;
  replicaAdapterCreateds: Array<ReplicaAdapterCreated>;
  replicaCreated?: Maybe<ReplicaCreated>;
  replicaCreateds: Array<ReplicaCreated>;
  transferFeeUpdated?: Maybe<TransferFeeUpdated>;
  transferFeeUpdateds: Array<TransferFeeUpdated>;
  transferFeesWithdrawn?: Maybe<TransferFeesWithdrawn>;
  transferFeesWithdrawns: Array<TransferFeesWithdrawn>;
  transferReverted?: Maybe<TransferReverted>;
  transferReverteds: Array<TransferReverted>;
  transfered?: Maybe<Transfered>;
  transferedCrosschain?: Maybe<TransferedCrosschain>;
  transferedCrosschains: Array<TransferedCrosschain>;
  transfereds: Array<Transfered>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionEip712DomainChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEip712DomainChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Eip712DomainChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Eip712DomainChanged_Filter>;
};


export type SubscriptionOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type SubscriptionRelayerRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRelayerRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RelayerRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RelayerRegistered_Filter>;
};


export type SubscriptionReplicaAdapterCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReplicaAdapterCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReplicaAdapterCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReplicaAdapterCreated_Filter>;
};


export type SubscriptionReplicaCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReplicaCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReplicaCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReplicaCreated_Filter>;
};


export type SubscriptionTransferFeeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferFeeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferFeeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferFeeUpdated_Filter>;
};


export type SubscriptionTransferFeesWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferFeesWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferFeesWithdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferFeesWithdrawn_Filter>;
};


export type SubscriptionTransferRevertedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferRevertedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferReverted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferReverted_Filter>;
};


export type SubscriptionTransferedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferedCrosschainArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferedCrosschainsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferedCrosschain_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferedCrosschain_Filter>;
};


export type SubscriptionTransferedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfered_Filter>;
};

export type TransferFeeUpdated = {
  __typename?: 'TransferFeeUpdated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fee_feeBp: Scalars['BigInt']['output'];
  fee_payee: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TransferFeeUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferFeeUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_feeBp?: InputMaybe<Scalars['BigInt']['input']>;
  fee_feeBp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_feeBp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_feeBp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_feeBp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_feeBp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_feeBp_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_feeBp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_payee?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_contains?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_gt?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_gte?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  fee_payee_lt?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_lte?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_not?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  fee_payee_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransferFeeUpdated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TransferFeeUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FeeFeeBp = 'fee_feeBp',
  FeePayee = 'fee_payee',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type TransferFeesWithdrawn = {
  __typename?: 'TransferFeesWithdrawn';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  payee: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TransferFeesWithdrawn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TransferFeesWithdrawn_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransferFeesWithdrawn_Filter>>>;
  payee?: InputMaybe<Scalars['Bytes']['input']>;
  payee_contains?: InputMaybe<Scalars['Bytes']['input']>;
  payee_gt?: InputMaybe<Scalars['Bytes']['input']>;
  payee_gte?: InputMaybe<Scalars['Bytes']['input']>;
  payee_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  payee_lt?: InputMaybe<Scalars['Bytes']['input']>;
  payee_lte?: InputMaybe<Scalars['Bytes']['input']>;
  payee_not?: InputMaybe<Scalars['Bytes']['input']>;
  payee_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  payee_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TransferFeesWithdrawn_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Payee = 'payee',
  TransactionHash = 'transactionHash'
}

export type TransferReverted = {
  __typename?: 'TransferReverted';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  data_assetHash: Scalars['Bytes']['output'];
  data_assetType: Scalars['Int']['output'];
  data_chainBid: Scalars['BigInt']['output'];
  data_from: Scalars['Bytes']['output'];
  data_nonce: Scalars['BigInt']['output'];
  data_params: Scalars['Bytes']['output'];
  data_to: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  transferHash: Scalars['Bytes']['output'];
};

export type TransferReverted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferReverted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_assetHash?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_assetHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_assetType?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_gt?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_gte?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  data_assetType_lt?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_lte?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_not?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  data_chainBid?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_chainBid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_not?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_from?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_nonce?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_params?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_params_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_to?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransferReverted_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transferHash?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transferHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TransferReverted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  DataAssetHash = 'data_assetHash',
  DataAssetType = 'data_assetType',
  DataChainBid = 'data_chainBid',
  DataFrom = 'data_from',
  DataNonce = 'data_nonce',
  DataParams = 'data_params',
  DataTo = 'data_to',
  Id = 'id',
  TransactionHash = 'transactionHash',
  TransferHash = 'transferHash'
}

export type Transfered = {
  __typename?: 'Transfered';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  data_assetHash: Scalars['Bytes']['output'];
  data_assetType: Scalars['Int']['output'];
  data_chainBid: Scalars['BigInt']['output'];
  data_from: Scalars['Bytes']['output'];
  data_nonce: Scalars['BigInt']['output'];
  data_params: Scalars['Bytes']['output'];
  data_to: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  transferHash: Scalars['Bytes']['output'];
};

export type TransferedCrosschain = {
  __typename?: 'TransferedCrosschain';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  data_assetHash: Scalars['Bytes']['output'];
  data_assetType: Scalars['Int']['output'];
  data_nonce: Scalars['BigInt']['output'];
  data_params: Scalars['Bytes']['output'];
  data_to: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  messageHash: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TransferedCrosschain_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferedCrosschain_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_assetHash?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_assetHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_assetType?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_gt?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_gte?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  data_assetType_lt?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_lte?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_not?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  data_nonce?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_params?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_params_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_to?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  messageHash?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  messageHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  messageHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransferedCrosschain_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TransferedCrosschain_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  DataAssetHash = 'data_assetHash',
  DataAssetType = 'data_assetType',
  DataNonce = 'data_nonce',
  DataParams = 'data_params',
  DataTo = 'data_to',
  Id = 'id',
  MessageHash = 'messageHash',
  TransactionHash = 'transactionHash'
}

export type Transfered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_assetHash?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_assetHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_assetHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_assetType?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_gt?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_gte?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  data_assetType_lt?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_lte?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_not?: InputMaybe<Scalars['Int']['input']>;
  data_assetType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  data_chainBid?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_chainBid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_not?: InputMaybe<Scalars['BigInt']['input']>;
  data_chainBid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_from?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_nonce?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  data_nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data_params?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_params_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_params_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_to?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transfered_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transferHash?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transferHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transferHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Transfered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  DataAssetHash = 'data_assetHash',
  DataAssetType = 'data_assetType',
  DataChainBid = 'data_chainBid',
  DataFrom = 'data_from',
  DataNonce = 'data_nonce',
  DataParams = 'data_params',
  DataTo = 'data_to',
  Id = 'id',
  TransactionHash = 'transactionHash',
  TransferHash = 'transferHash'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type ReplicasQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ReplicasQueryQuery = { __typename?: 'Query', replicaCreateds: Array<{ __typename?: 'ReplicaCreated', id: any, hash: any, address_: any, creator: any, assetData_type_: number, assetData_chainBid: any, assetData_address_: any, assetData_metadata: any }>, replicaAdapterCreateds: Array<{ __typename?: 'ReplicaAdapterCreated', id: any, hash: any, address_: any, creator: any, assetData_type_: number, assetData_chainBid: any, assetData_address_: any, assetData_metadata: any }> };

export type TransferQueryQueryVariables = Exact<{
  transferHash: Scalars['Bytes']['input'];
}>;


export type TransferQueryQuery = { __typename?: 'Query', transfereds: Array<{ __typename?: 'Transfered', id: any, transferHash: any }> };

export type TransfersQueryQueryVariables = Exact<{
  addressFrom: Scalars['Bytes']['input'];
  addressTo?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type TransfersQueryQuery = { __typename?: 'Query', transfereds: Array<{ __typename?: 'Transfered', id: any, transferHash: any, transactionHash: any, data_assetType: number, data_assetHash: any, data_from: any, data_to: any, data_chainBid: any, data_params: any, data_nonce: any }> };


export const ReplicasQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"replicasQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replicaCreateds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"address_"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_type_"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_chainBid"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_address_"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_metadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replicaAdapterCreateds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"address_"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_type_"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_chainBid"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_address_"}},{"kind":"Field","name":{"kind":"Name","value":"assetData_metadata"}}]}}]}}]} as unknown as DocumentNode<ReplicasQueryQuery, ReplicasQueryQueryVariables>;
export const TransferQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"transferQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transferHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transfereds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"transferHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transferHash"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transferHash"}}]}}]}}]} as unknown as DocumentNode<TransferQueryQuery, TransferQueryQueryVariables>;
export const TransfersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"transfersQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressFrom"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressTo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transfereds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data_from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressFrom"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressTo"}}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"transferHash"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"data_assetType"}},{"kind":"Field","name":{"kind":"Name","value":"data_assetHash"}},{"kind":"Field","name":{"kind":"Name","value":"data_from"}},{"kind":"Field","name":{"kind":"Name","value":"data_to"}},{"kind":"Field","name":{"kind":"Name","value":"data_chainBid"}},{"kind":"Field","name":{"kind":"Name","value":"data_params"}},{"kind":"Field","name":{"kind":"Name","value":"data_nonce"}}]}}]}}]} as unknown as DocumentNode<TransfersQueryQuery, TransfersQueryQueryVariables>;