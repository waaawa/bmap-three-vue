import { isArray, isIterable, isNullOrUnDef, isString } from "./is";

/**
 * 转为数组
 * @param {any} value
 * @returns {any[]}
 */
export function arrify(value) {
  if (isNullOrUnDef(value)) {
    return [];
  }

  if (isArray(value)) {
    return value;
  }

  if (isString(value)) {
    return [value];
  }

  if (isIterable(value)) {
    return [...value];
  }

  return [value];
}
