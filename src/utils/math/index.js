/**
 * 生成随机范围数值
 */
export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}
