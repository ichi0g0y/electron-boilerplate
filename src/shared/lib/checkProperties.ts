import _ from 'lodash';

/*-----------------------------------------------------------------------------*/
export const checkProperties = <T extends unknown, K extends string>(obj: T, ...keys: K[]): obj is T & { [J in K]: unknown } => {
  if (!_.isObject(obj)) throw new Error('obj not object');
  for (let i = 0; i < keys.length; i++) {
    if (obj.hasOwnProperty(keys[i])) continue;
    throw new Error(`not found -> ${keys[i]}`);
  }
  return true;
};
