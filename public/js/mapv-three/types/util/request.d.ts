/**
 * @file 请求公共方法
 * @author hedongran [hdr01@126.com]
 */
/**
 * 请求失败后重新请求
 * @param {string} url 请求路径，同fetch第一个参数
 * @param {object} fetchOptions fetch的参数，同fetch第二个参数
 * @param {number} times 最大重新请求次数，默认3次
 */
export function reFetch(url: string | undefined, fetchOptions: object, times?: number): any;
/**
 * jsonp请求
 * @param {string} url 请求url
 * @param {Object} param 请求参数
 * @param {Function} callback 回调函数
 * @return {boolean} false
 */
export function jsonp(url: string, param: Object, options: any): boolean;
