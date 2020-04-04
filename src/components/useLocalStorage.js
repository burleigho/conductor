import React from 'react';

export default function useLocalStorage (localStorageKey) {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value, localStorageKey]);

  return [value, setValue];
};