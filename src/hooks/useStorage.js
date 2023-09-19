// useStorage V-2.0.0

import { useCallback, useState, useEffect } from "react";

/**
 * A hook similar to useState that stores the value in local storage or session storage
 * @param {string} key The key to be saved in storage
 * @param {any} defaultValue The value to be saved in storage
 * @param {'local'|'session'|undefined} storage The storage to be used
 * @returns [value, setValue, remove]: The value is the current value, setValue is the value setter, and remove is the value unsetter
 */
export default function useStorage(
  key,
  defaultValue = undefined,
  storage = "local"
) {
  let store = window.localStorage;
  if (storage && storage === "session") {
    store = window.sessionStorage;
  }
  return useStorageMain(key, defaultValue, store);
}

/**
 * The main hook that useStorage depends on
 * @param {string} key The key to be saved in storage
 * @param {any} defaultValue The value to be saved in storage
 * @param {Storage} storageObject The storage to be used
 * @returns {[value:any,setValue:React.Dispatch<any>,remove]} The value is the current value, setValue is the value setter, and remove is the value unsetter
 */

function useStorageMain(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
