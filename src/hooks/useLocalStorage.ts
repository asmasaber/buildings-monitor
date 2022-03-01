import { useState, useEffect } from 'react';

function getStorageValue<T>(key: string, defaultValue: T) {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const initial =
      saved !== undefined ? JSON.parse(saved as string) : defaultValue;
    return initial;
  }
}

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue<T>(key, defaultValue as T);
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
};
