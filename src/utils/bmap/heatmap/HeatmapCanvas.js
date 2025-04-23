export class HeatmapCanvas {
  constructor(canvasEl, config) {
    const { gap, size } = config;

    this.gap = gap;
    this.size = size;
  }

  draw() {}
}

export function createCanvas(width, height) {
  const canvas = document.createElement("canvas");

  width && (canvas.width = width);
  height && (canvas.height = height);

  return canvas;
}
