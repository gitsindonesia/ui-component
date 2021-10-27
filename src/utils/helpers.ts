export const get = (obj: any, path: any, defaultValue = undefined) => {
  const travel = (regexp: any) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj,
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

export const stripTags = (str: string) => str?.replace(/(<([^>]+)>)/gi, '');

export const toFormData = <T extends Record<string, any>>(values: T) => {
  const data = new FormData();
  for (let key in values) {
    data.append(key, values[key]);
  }
  return data;
};

export const toOptions = <T extends Record<string, any>[]>(
  items: T,
  text = 'text',
  value = 'value',
) =>
  items?.map((item) => ({
    text: item[text],
    value: item[value],
  })) || [];
