import { parseAsInteger, parseAsString } from 'nuqs';

export const assetQueryState = {
  address: parseAsString.withDefault(''),
  chainBid: parseAsInteger.withDefault(0),
};
