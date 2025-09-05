export function getItem(key: string, defaultValue = null) {
  try {
    return localStorage.getItem(key);
  } catch (_e: any) {
    return defaultValue;
  }
}

export function setItem(key: string, value: string) {
  try {
    return localStorage.setItem(key, value);
  } catch (_e: any) {
    return false;
  }
}
