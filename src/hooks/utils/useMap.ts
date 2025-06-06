import { useCallback, useState } from 'react';

export type MapOrEntries<K, V> = Map<K, V> | [K, V][];

export type UseMapActions<K, V> = {
  set: (key: K, value: V) => void;
  setAll: (entries: MapOrEntries<K, V>) => void;
  remove: (key: K) => void;
  reset: Map<K, V>['clear'];
};

export type UseMapReturn<K, V> = [
  Omit<Map<K, V>, 'set' | 'clear' | 'delete'>,
  UseMapActions<K, V>
];

export function useMap<K, V>(
  initialState: MapOrEntries<K, V> = new Map()
): UseMapReturn<K, V> {
  const [map, setMap] = useState(new Map(initialState));

  const actions: UseMapActions<K, V> = {
    set: useCallback((key, value) => {
      setMap((prev) => {
        const copy = new Map(prev);
        copy.set(key, value);
        return copy;
      });
    }, []),

    setAll: useCallback((entries) => {
      setMap(() => new Map(entries));
    }, []),

    remove: useCallback((key) => {
      setMap((prev) => {
        const copy = new Map(prev);
        copy.delete(key);
        return copy;
      });
    }, []),

    reset: useCallback(() => {
      setMap(() => new Map());
    }, []),
  };

  return [map, actions];
}
