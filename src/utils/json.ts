/* eslint-disable @typescript-eslint/no-explicit-any */
function bigIntReplacer(_key: string, value: any): any {
  if (typeof value === 'bigint') {
    return value.toString() + 'n';
  }
  return value;
}

function bigIntReviver(_key: string, value: any): any {
  if (typeof value === 'string' && /^\d+n$/.test(value)) {
    return BigInt(value.slice(0, -1));
  }
  return value;
}

export function jsonify(data: any, space?: string | number): string {
  return JSON.stringify(data, bigIntReplacer, space);
}

export function dejsonify(data: string): any {
  return JSON.parse(data, bigIntReviver);
}
