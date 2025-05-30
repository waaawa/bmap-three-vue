const toString = Object.prototype.toString;

export function is(val, type) {
  return toString.call(val) === '[object '.concat(type, ']');
}

export function isDef(val) {
  return typeof val !== 'undefined';
}

export function isUnDef(val) {
  return !isDef(val);
}

export function isObject(val) {
  return val !== null && is(val, 'Object');
}

export function isEmpty(val) {
  if (isNullOrUnDef(val)) return true;
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }
  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }
  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }
  return false;
}

export function isDate(val) {
  return is(val, 'Date');
}

export function isNull(val) {
  return val === null;
}

export function isNullAndUnDef(val) {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val) {
  return isUnDef(val) || isNull(val);
}

export function isNumber(val) {
  return is(val, 'Number');
}

export function isPromise(val) {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val['catch']);
}

export function isString(val) {
  return is(val, 'String');
}

export function isFunction(val) {
  return typeof val === 'function';
}

export function isBoolean(val) {
  return is(val, 'Boolean');
}

export function isRegExp(val) {
  return is(val, 'RegExp');
}

export function isArray(val) {
  return val && Array.isArray(val);
}

export function isWindow(val) {
  return typeof window !== 'undefined' && is(val, 'Window');
}

export function isElement(val) {
  return isObject(val) && !!val.tagName;
}

export function isMap(val) {
  return is(val, 'Map');
}

export var isServer = typeof window === 'undefined';

export var isClient = !isServer;

export var isMobile = function () {
  return /(mobi|iphone|android)/i.test(navigator.userAgent);
};

export function isUrl(path) {
  var reg = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return reg.test(path);
}

export function isIterable(val) {
  var key = Symbol.iterator;
  return isObject(val) && isFunction(val[key]);
}

export function isEntries(value) {
  if (isArray(value)) {
    if (!value.length) return true;
    if (isArray(value[0]) && value[0].length >= 2) return true;
  }
  return false;
}
