import { zeroAddress } from 'viem';
import { addressToBytes32 } from './format';

export const zeroBytes32 = addressToBytes32(zeroAddress);
