import { narrow, TypedDataToPrimitiveTypes } from 'abitype';

export const TransferTypedData = narrow({
  Transfer: [
    { name: 'asset', type: 'Asset' },
    { name: 'from', type: 'Account' },
    { name: 'to', type: 'Account' },
    { name: 'params', type: 'bytes' },
    { name: 'nonce', type: 'uint256' },
  ],
  Account: [
    { name: 'chainBid', type: 'uint256' },
    { name: 'address_', type: 'bytes32' },
  ],
  Asset: [
    { name: 'type_', type: 'uint8' },
    { name: 'chainBid', type: 'uint256' },
    { name: 'address_', type: 'bytes32' },
  ],
});

export type TransferTyped = TypedDataToPrimitiveTypes<
  typeof TransferTypedData
>['Transfer'];

export const PermitTypedData = narrow({
  Permit: [
    { name: 'owner', type: 'address' },
    { name: 'spender', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ],
});

export type PermitTyped = TypedDataToPrimitiveTypes<
  typeof PermitTypedData
>['Permit'];
