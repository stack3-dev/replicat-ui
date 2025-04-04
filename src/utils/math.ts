/**
 * @dev Internal function to convert an amount from a decimals into another decimals.
 * e.g. 100 from 2 decimals to 3 decimals will return 1000 rest 0
 * e.g. 100 from 3 decimals to 2 decimals will return 10 rest 0
 * e.g. 101 from 3 decimals to 1 decimals will return 10 rest 1
 * @param fromAmount The amount in the fromDecimals.
 * @param fromDecimals The decimals of the fromAmount.
 * @param toDecimals_ The decimals to convert the amount to.
 * @return toAmount The amount in the toDecimals.
 * @return fromRest The rest of the conversion.
 */
export const amountToDecimals = (
  fromAmount: bigint,
  fromDecimals: number,
  toDecimals: number
): [bigint, bigint] => {
  if (fromDecimals === toDecimals) {
    return [fromAmount, 0n];
  }

  let factor = 0n;
  let fromRest = 0n;
  let toAmount = 0n;
  if (fromDecimals > toDecimals) {
    factor = 10n ** BigInt(fromDecimals - toDecimals);
    fromRest = fromAmount % factor;
    toAmount = fromAmount / factor;
  } else {
    factor = 10n ** BigInt(toDecimals - fromDecimals);
    toAmount = fromAmount * factor;
  }

  return [toAmount, fromRest];
};

export const getNonce = (): bigint => {
  return BigInt(Math.floor(Math.random() * 1000000));
};
