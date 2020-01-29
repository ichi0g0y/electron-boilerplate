import _ from 'lodash';

/*-----------------------------------------------------------------------------*/
export const isStrings = (data: unknown): data is string[] => {
  try {
    if (!_.isArray(data)) throw new Error('is not array');
    data.forEach(v => {
      if (!_.isString(v)) throw new Error('not string');
    });
    return true;
  } catch (e) {
    return false;
  }
};

/*-----------------------------------------------------------------------------*/
export const isNumbers = (data: unknown): data is number[] => {
  try {
    if (!_.isArray(data)) throw new Error('is not array');
    _.forEach(data, v => {
      if (_.isNumber(v)) return true;
      throw new Error('not number');
    });
    return true;
  } catch (e) {
    return false;
  }
};

/*-----------------------------------------------------------------------------*/
export interface KeyStringValue {
  [key: string]: string;
}
export const isKeyStringValue = (data: unknown): data is KeyStringValue => {
  try {
    if (!_.isObject(data)) throw new Error('not object');
    _.forEach(data, (value, key) => {
      if (_.isString(key) && _.isString(value)) return true;
      throw new Error('not string');
    });
    return true;
  } catch (e) {
    return false;
  }
};
