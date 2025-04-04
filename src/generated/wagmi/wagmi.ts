import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bridge
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const bridgeAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'chainBid',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'asset',
        internalType: 'struct Asset',
        type: 'tuple',
        components: [
          { name: 'type_', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'address_', internalType: 'bytes32', type: 'bytes32' },
          { name: 'metadata', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'computeReplicaAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'asset',
        internalType: 'struct Asset',
        type: 'tuple',
        components: [
          { name: 'type_', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'address_', internalType: 'bytes32', type: 'bytes32' },
          { name: 'metadata', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'extraArgs', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createReplica',
    outputs: [
      { name: 'replicaAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'asset',
        internalType: 'struct Asset',
        type: 'tuple',
        components: [
          { name: 'type_', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'address_', internalType: 'bytes32', type: 'bytes32' },
          { name: 'metadata', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'createReplicaAdapter',
    outputs: [
      { name: 'replicaAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'relayerClass', internalType: 'bytes4', type: 'bytes4' }],
    name: 'getRelayer',
    outputs: [{ name: '', internalType: 'contract IRelayer', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTransferFee',
    outputs: [
      {
        name: '',
        internalType: 'struct IBridge.TransferFee',
        type: 'tuple',
        components: [
          { name: 'feeBp', internalType: 'uint48', type: 'uint48' },
          { name: 'payee', internalType: 'address payable', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'transferHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getTransferStatus',
    outputs: [
      {
        name: '',
        internalType: 'struct IBridge.TransferStatus',
        type: 'tuple',
        components: [
          { name: 'isReverted', internalType: 'bool', type: 'bool' },
          { name: 'relayer', internalType: 'address', type: 'address' },
          { name: 'relayerTrackId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'handleMessage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dataHash_', internalType: 'bytes32', type: 'bytes32' }],
    name: 'hash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'relayer', internalType: 'address', type: 'address' }],
    name: 'isRelayer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'transfer_',
        internalType: 'struct Transfer',
        type: 'tuple',
        components: [
          { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'assetHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'params', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'relayerClass', internalType: 'bytes4', type: 'bytes4' },
      { name: 'relayerOptions', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'quoteTransfer',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'messengerClass', internalType: 'bytes4', type: 'bytes4' },
      { name: 'messenger', internalType: 'contract IRelayer', type: 'address' },
    ],
    name: 'registerRelayer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'transfer_',
        internalType: 'struct Transfer',
        type: 'tuple',
        components: [
          { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'assetHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'params', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'revertTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'fee',
        internalType: 'struct IBridge.TransferFee',
        type: 'tuple',
        components: [
          { name: 'feeBp', internalType: 'uint48', type: 'uint48' },
          { name: 'payee', internalType: 'address payable', type: 'address' },
        ],
      },
    ],
    name: 'setTransferFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'transfer_',
        internalType: 'struct Transfer',
        type: 'tuple',
        components: [
          { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'assetHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'params', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
      { name: 'relayerClass', internalType: 'bytes4', type: 'bytes4' },
      { name: 'relayerOptions', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'transfer_',
        internalType: 'struct Transfer',
        type: 'tuple',
        components: [
          { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'assetHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'params', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
      { name: 'relayerClass', internalType: 'bytes4', type: 'bytes4' },
      { name: 'relayerOptions', internalType: 'bytes', type: 'bytes' },
      {
        name: 'permit',
        internalType: 'struct IBridge.Permit',
        type: 'tuple',
        components: [
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
          { name: 'v', internalType: 'uint8', type: 'uint8' },
          { name: 'r', internalType: 'bytes32', type: 'bytes32' },
          { name: 's', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'transferWithPermit',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'replica', internalType: 'contract RNFT', type: 'address' },
      { name: 'baseURI', internalType: 'string', type: 'string' },
    ],
    name: 'updateRNFTBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawTransferFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayerClass',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
      {
        name: 'relayer',
        internalType: 'contract IRelayer',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RelayerRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'asset',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'assetData',
        internalType: 'struct Asset',
        type: 'tuple',
        components: [
          { name: 'type_', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'address_', internalType: 'bytes32', type: 'bytes32' },
          { name: 'metadata', internalType: 'bytes', type: 'bytes' },
        ],
        indexed: false,
      },
    ],
    name: 'ReplicaCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'fee',
        internalType: 'struct IBridge.TransferFee',
        type: 'tuple',
        components: [
          { name: 'feeBp', internalType: 'uint48', type: 'uint48' },
          { name: 'payee', internalType: 'address payable', type: 'address' },
        ],
        indexed: false,
      },
    ],
    name: 'TransferFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'payee',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferFeesWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'transferHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'data',
        internalType: 'struct Transfer',
        type: 'tuple',
        components: [
          { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'assetHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'params', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'TransferReverted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'transferHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'data',
        internalType: 'struct Transfer',
        type: 'tuple',
        components: [
          { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'assetHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
          { name: 'params', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Transfered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'messageHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'data',
        internalType: 'struct MessageTransfer',
        type: 'tuple',
        components: [
          { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
          { name: 'assetHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'params', internalType: 'bytes', type: 'bytes' },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'TransferedCrosschain',
  },
  {
    type: 'error',
    inputs: [{ name: 'assetHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'Bridge_AssetNotFound',
  },
  {
    type: 'error',
    inputs: [{ name: 'chainBid', internalType: 'uint256', type: 'uint256' }],
    name: 'Bridge_InvalidChainBid',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'fee',
        internalType: 'struct IBridge.TransferFee',
        type: 'tuple',
        components: [
          { name: 'feeBp', internalType: 'uint48', type: 'uint48' },
          { name: 'payee', internalType: 'address payable', type: 'address' },
        ],
      },
    ],
    name: 'Bridge_InvalidFeeBpTooHigh',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'Bridge_InvalidSignature',
  },
  {
    type: 'error',
    inputs: [{ name: 'relayerClass', internalType: 'bytes4', type: 'bytes4' }],
    name: 'Bridge_RelayerNotFound',
  },
  {
    type: 'error',
    inputs: [
      { name: 'transferHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'Bridge_TransferAlreadyProcessed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'transferHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'Bridge_TransferAlreadyReverted',
  },
  {
    type: 'error',
    inputs: [
      { name: 'transferHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'Bridge_TransferNotFound',
  },
  {
    type: 'error',
    inputs: [
      { name: 'transferHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'Bridge_TransferNotRevertable',
  },
  {
    type: 'error',
    inputs: [{ name: 'relayer', internalType: 'address', type: 'address' }],
    name: 'Bridge_UnauthorizedRelayer',
  },
  { type: 'error', inputs: [], name: 'FailedCall' },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'LibMath_Overflow' },
  {
    type: 'error',
    inputs: [
      { name: 'assetClass', internalType: 'enum AssetType', type: 'uint8' },
    ],
    name: 'LibReplica_InvalidAssetType',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'rest', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LibReplica_InvalidTransferAmount',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'error',
    inputs: [
      { name: 'relayer', internalType: 'contract IRelayer', type: 'address' },
    ],
    name: 'RelayerRegistry_InvalidRelayer',
  },
  {
    type: 'error',
    inputs: [{ name: 'relayerClass', internalType: 'bytes4', type: 'bytes4' }],
    name: 'RelayerRegistry_InvalidRelayerClass',
  },
  {
    type: 'error',
    inputs: [
      { name: 'assetType', internalType: 'enum AssetType', type: 'uint8' },
    ],
    name: 'ReplicaFactory_AssetClassNotSupported',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IRERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const irerc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'crosschainBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'crosschainMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CrosschainBurn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CrosschainMint',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LayerZeroMessenger
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const layerZeroMessengerAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'messageHandler',
        internalType: 'contract IMessageHandler',
        type: 'address',
      },
      { name: 'endpoint', internalType: 'address', type: 'address' },
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [
      {
        name: '',
        internalType: 'contract ILayerZeroEndpointV2',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'chainBid', internalType: 'uint256', type: 'uint256' }],
    name: 'getChainBidEndpoint',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getOptions',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'isFailed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_executor', internalType: 'address', type: 'address' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceive',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'messageHandler',
    outputs: [
      { name: '', internalType: 'contract IMessageHandler', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'messengerClass',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'quoteTransmit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
      { name: 'endpoint', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'setChainBidEndpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_delegate', internalType: 'address', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newHandler',
        internalType: 'contract IMessageHandler',
        type: 'address',
      },
    ],
    name: 'setMessageHandler',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'options', internalType: 'bytes', type: 'bytes' }],
    name: 'setOptions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'chainBid', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'refundAddress',
        internalType: 'address payable',
        type: 'address',
      },
    ],
    name: 'transmit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'chainBid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'endpoint',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
    ],
    name: 'BridgeChainEndpointSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'trackId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Messenger_MessageHandled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldHandler',
        internalType: 'contract IMessageHandler',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newHandler',
        internalType: 'contract IMessageHandler',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Messenger_MessageHandlerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'options', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'OptionsSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'peer',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'PeerSet',
  },
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [], name: 'LzTokenUnavailable' },
  { type: 'error', inputs: [], name: 'Messenger_InvalidMessage' },
  { type: 'error', inputs: [], name: 'Messenger_MessageAlreadyHandled' },
  { type: 'error', inputs: [], name: 'Messenger_OperationNotSupported' },
  {
    type: 'error',
    inputs: [{ name: 'chainBid', internalType: 'uint256', type: 'uint256' }],
    name: 'Messenger_UnsupportedChainBid',
  },
  {
    type: 'error',
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'NoPeer',
  },
  {
    type: 'error',
    inputs: [{ name: 'msgValue', internalType: 'uint256', type: 'uint256' }],
    name: 'NotEnoughNative',
  },
  {
    type: 'error',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'OnlyEndpoint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__
 */
export const useReadBridge = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"chainBid"`
 */
export const useReadBridgeChainBid = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'chainBid',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"computeReplicaAddress"`
 */
export const useReadBridgeComputeReplicaAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: bridgeAbi,
    functionName: 'computeReplicaAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadBridgeEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"getRelayer"`
 */
export const useReadBridgeGetRelayer = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'getRelayer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"getTransferFee"`
 */
export const useReadBridgeGetTransferFee = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'getTransferFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"getTransferStatus"`
 */
export const useReadBridgeGetTransferStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: bridgeAbi,
    functionName: 'getTransferStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"hash"`
 */
export const useReadBridgeHash = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'hash',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"isRelayer"`
 */
export const useReadBridgeIsRelayer = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'isRelayer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"owner"`
 */
export const useReadBridgeOwner = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"quoteTransfer"`
 */
export const useReadBridgeQuoteTransfer = /*#__PURE__*/ createUseReadContract({
  abi: bridgeAbi,
  functionName: 'quoteTransfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__
 */
export const useWriteBridge = /*#__PURE__*/ createUseWriteContract({
  abi: bridgeAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"createReplica"`
 */
export const useWriteBridgeCreateReplica = /*#__PURE__*/ createUseWriteContract(
  { abi: bridgeAbi, functionName: 'createReplica' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"createReplicaAdapter"`
 */
export const useWriteBridgeCreateReplicaAdapter =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'createReplicaAdapter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"handleMessage"`
 */
export const useWriteBridgeHandleMessage = /*#__PURE__*/ createUseWriteContract(
  { abi: bridgeAbi, functionName: 'handleMessage' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"registerRelayer"`
 */
export const useWriteBridgeRegisterRelayer =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'registerRelayer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteBridgeRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"revertTransfer"`
 */
export const useWriteBridgeRevertTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'revertTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"setTransferFee"`
 */
export const useWriteBridgeSetTransferFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'setTransferFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteBridgeTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: bridgeAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteBridgeTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"transferWithPermit"`
 */
export const useWriteBridgeTransferWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'transferWithPermit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"updateRNFTBaseURI"`
 */
export const useWriteBridgeUpdateRnftBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'updateRNFTBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"withdrawTransferFees"`
 */
export const useWriteBridgeWithdrawTransferFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: bridgeAbi,
    functionName: 'withdrawTransferFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__
 */
export const useSimulateBridge = /*#__PURE__*/ createUseSimulateContract({
  abi: bridgeAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"createReplica"`
 */
export const useSimulateBridgeCreateReplica =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'createReplica',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"createReplicaAdapter"`
 */
export const useSimulateBridgeCreateReplicaAdapter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'createReplicaAdapter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"handleMessage"`
 */
export const useSimulateBridgeHandleMessage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'handleMessage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"registerRelayer"`
 */
export const useSimulateBridgeRegisterRelayer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'registerRelayer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateBridgeRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"revertTransfer"`
 */
export const useSimulateBridgeRevertTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'revertTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"setTransferFee"`
 */
export const useSimulateBridgeSetTransferFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'setTransferFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateBridgeTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateBridgeTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"transferWithPermit"`
 */
export const useSimulateBridgeTransferWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'transferWithPermit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"updateRNFTBaseURI"`
 */
export const useSimulateBridgeUpdateRnftBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'updateRNFTBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bridgeAbi}__ and `functionName` set to `"withdrawTransferFees"`
 */
export const useSimulateBridgeWithdrawTransferFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bridgeAbi,
    functionName: 'withdrawTransferFees',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__
 */
export const useWatchBridgeEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: bridgeAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchBridgeEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchBridgeOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"RelayerRegistered"`
 */
export const useWatchBridgeRelayerRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'RelayerRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"ReplicaCreated"`
 */
export const useWatchBridgeReplicaCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'ReplicaCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"TransferFeeUpdated"`
 */
export const useWatchBridgeTransferFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'TransferFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"TransferFeesWithdrawn"`
 */
export const useWatchBridgeTransferFeesWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'TransferFeesWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"TransferReverted"`
 */
export const useWatchBridgeTransferRevertedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'TransferReverted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"Transfered"`
 */
export const useWatchBridgeTransferedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'Transfered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bridgeAbi}__ and `eventName` set to `"TransferedCrosschain"`
 */
export const useWatchBridgeTransferedCrosschainEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bridgeAbi,
    eventName: 'TransferedCrosschain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useReadErc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadErc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20PermitAllowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20PermitBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20PermitDecimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadErc20PermitEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20PermitName = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadErc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20PermitSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20PermitAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20PermitTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20PermitAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useWriteErc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20PermitApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteErc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20PermitTransfer = /*#__PURE__*/ createUseWriteContract(
  { abi: erc20PermitAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20PermitTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20PermitAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useSimulateErc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20PermitApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateErc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20PermitTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20PermitAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20PermitTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20PermitAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__
 */
export const useWatchErc20PermitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc20PermitAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20PermitApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchErc20PermitEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20PermitAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20PermitTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20PermitAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link irerc20Abi}__
 */
export const useReadIrerc20 = /*#__PURE__*/ createUseReadContract({
  abi: irerc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link irerc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadIrerc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: irerc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link irerc20Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIrerc20SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: irerc20Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link irerc20Abi}__
 */
export const useWriteIrerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: irerc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link irerc20Abi}__ and `functionName` set to `"crosschainBurn"`
 */
export const useWriteIrerc20CrosschainBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: irerc20Abi,
    functionName: 'crosschainBurn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link irerc20Abi}__ and `functionName` set to `"crosschainMint"`
 */
export const useWriteIrerc20CrosschainMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: irerc20Abi,
    functionName: 'crosschainMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link irerc20Abi}__
 */
export const useSimulateIrerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: irerc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link irerc20Abi}__ and `functionName` set to `"crosschainBurn"`
 */
export const useSimulateIrerc20CrosschainBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: irerc20Abi,
    functionName: 'crosschainBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link irerc20Abi}__ and `functionName` set to `"crosschainMint"`
 */
export const useSimulateIrerc20CrosschainMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: irerc20Abi,
    functionName: 'crosschainMint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link irerc20Abi}__
 */
export const useWatchIrerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: irerc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link irerc20Abi}__ and `eventName` set to `"CrosschainBurn"`
 */
export const useWatchIrerc20CrosschainBurnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: irerc20Abi,
    eventName: 'CrosschainBurn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link irerc20Abi}__ and `eventName` set to `"CrosschainMint"`
 */
export const useWatchIrerc20CrosschainMintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: irerc20Abi,
    eventName: 'CrosschainMint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__
 */
export const useReadLayerZeroMessenger = /*#__PURE__*/ createUseReadContract({
  abi: layerZeroMessengerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"allowInitializePath"`
 */
export const useReadLayerZeroMessengerAllowInitializePath =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'allowInitializePath',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"endpoint"`
 */
export const useReadLayerZeroMessengerEndpoint =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'endpoint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"getChainBidEndpoint"`
 */
export const useReadLayerZeroMessengerGetChainBidEndpoint =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'getChainBidEndpoint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"getOptions"`
 */
export const useReadLayerZeroMessengerGetOptions =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'getOptions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"isComposeMsgSender"`
 */
export const useReadLayerZeroMessengerIsComposeMsgSender =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'isComposeMsgSender',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"isFailed"`
 */
export const useReadLayerZeroMessengerIsFailed =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'isFailed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"messageHandler"`
 */
export const useReadLayerZeroMessengerMessageHandler =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'messageHandler',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"messengerClass"`
 */
export const useReadLayerZeroMessengerMessengerClass =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'messengerClass',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"nextNonce"`
 */
export const useReadLayerZeroMessengerNextNonce =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'nextNonce',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const useReadLayerZeroMessengerOAppVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'oAppVersion',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLayerZeroMessengerOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"peers"`
 */
export const useReadLayerZeroMessengerPeers =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'peers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"quoteTransmit"`
 */
export const useReadLayerZeroMessengerQuoteTransmit =
  /*#__PURE__*/ createUseReadContract({
    abi: layerZeroMessengerAbi,
    functionName: 'quoteTransmit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__
 */
export const useWriteLayerZeroMessenger = /*#__PURE__*/ createUseWriteContract({
  abi: layerZeroMessengerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"lzReceive"`
 */
export const useWriteLayerZeroMessengerLzReceive =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'lzReceive',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLayerZeroMessengerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setChainBidEndpoint"`
 */
export const useWriteLayerZeroMessengerSetChainBidEndpoint =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setChainBidEndpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setDelegate"`
 */
export const useWriteLayerZeroMessengerSetDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setMessageHandler"`
 */
export const useWriteLayerZeroMessengerSetMessageHandler =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setMessageHandler',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setOptions"`
 */
export const useWriteLayerZeroMessengerSetOptions =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setOptions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setPeer"`
 */
export const useWriteLayerZeroMessengerSetPeer =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setPeer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLayerZeroMessengerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"transmit"`
 */
export const useWriteLayerZeroMessengerTransmit =
  /*#__PURE__*/ createUseWriteContract({
    abi: layerZeroMessengerAbi,
    functionName: 'transmit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__
 */
export const useSimulateLayerZeroMessenger =
  /*#__PURE__*/ createUseSimulateContract({ abi: layerZeroMessengerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"lzReceive"`
 */
export const useSimulateLayerZeroMessengerLzReceive =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'lzReceive',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLayerZeroMessengerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setChainBidEndpoint"`
 */
export const useSimulateLayerZeroMessengerSetChainBidEndpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setChainBidEndpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setDelegate"`
 */
export const useSimulateLayerZeroMessengerSetDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setDelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setMessageHandler"`
 */
export const useSimulateLayerZeroMessengerSetMessageHandler =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setMessageHandler',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setOptions"`
 */
export const useSimulateLayerZeroMessengerSetOptions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setOptions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"setPeer"`
 */
export const useSimulateLayerZeroMessengerSetPeer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'setPeer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLayerZeroMessengerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `functionName` set to `"transmit"`
 */
export const useSimulateLayerZeroMessengerTransmit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: layerZeroMessengerAbi,
    functionName: 'transmit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link layerZeroMessengerAbi}__
 */
export const useWatchLayerZeroMessengerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: layerZeroMessengerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `eventName` set to `"BridgeChainEndpointSet"`
 */
export const useWatchLayerZeroMessengerBridgeChainEndpointSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: layerZeroMessengerAbi,
    eventName: 'BridgeChainEndpointSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `eventName` set to `"Messenger_MessageHandled"`
 */
export const useWatchLayerZeroMessengerMessengerMessageHandledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: layerZeroMessengerAbi,
    eventName: 'Messenger_MessageHandled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `eventName` set to `"Messenger_MessageHandlerChanged"`
 */
export const useWatchLayerZeroMessengerMessengerMessageHandlerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: layerZeroMessengerAbi,
    eventName: 'Messenger_MessageHandlerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `eventName` set to `"OptionsSet"`
 */
export const useWatchLayerZeroMessengerOptionsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: layerZeroMessengerAbi,
    eventName: 'OptionsSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLayerZeroMessengerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: layerZeroMessengerAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link layerZeroMessengerAbi}__ and `eventName` set to `"PeerSet"`
 */
export const useWatchLayerZeroMessengerPeerSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: layerZeroMessengerAbi,
    eventName: 'PeerSet',
  })
