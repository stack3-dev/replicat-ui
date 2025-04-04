import { zeroAddress } from 'viem';
import { bytesToAddress } from './format';

export const zeroBytes32 = bytesToAddress(zeroAddress);
