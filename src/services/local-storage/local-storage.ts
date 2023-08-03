import { LOCAL_KEYS } from "./local-storage.model";

const read = <T>(key: `${LOCAL_KEYS}` | string, parse=true) : T | null => {
  const data = localStorage.getItem(key)
  return (data && parse) ? JSON.parse(data) : data;
}

const write = <T>(key: `${LOCAL_KEYS}` | string, data: T) => data && localStorage.setItem(key, JSON.stringify(data));

const DEL = (key: `${LOCAL_KEYS}` | string) =>  localStorage.removeItem(key);

const Local = {
    read,
    write,
    DEL
}

export default Local

