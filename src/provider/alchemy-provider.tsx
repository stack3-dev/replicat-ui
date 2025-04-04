import { Alchemy } from 'alchemy-sdk';
import { createContext } from 'react';
import { UseMapReturn, useMap } from '@/hooks/utils/useMap';

// eslint-disable-next-line react-refresh/only-export-components
export const AlchemyContext = createContext(
  {} as UseMapReturn<number, Alchemy>
);

export function AlchemyProvider({ children }: { children: React.ReactNode }) {
  const map = useMap<number, Alchemy>();

  return (
    <AlchemyContext.Provider value={map}>{children}</AlchemyContext.Provider>
  );
}
