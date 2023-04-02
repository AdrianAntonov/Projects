import { useState, useEffect } from 'react';
function UseLocalStorage(key: string, defaultValue: any) {
  const [state, setState] = useState(() => {
    return defaultValue;
  });
  useEffect(() => {
    return window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default UseLocalStorage;
