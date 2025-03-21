/**
 * 随机生成一个Hex颜色值
 */
export function randomHexColor() {
  return Math.floor(Math.random() * 0xffffff);
}

/**
 * 随机生成一个Hex颜色值
 */
export function randomHexColorStr() {
  const color = randomHexColor().toString(16);
  return `#${color.padStart(6, "0")}`;
}
