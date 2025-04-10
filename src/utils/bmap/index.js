export * from "./tube";
export * from "./line-manager";
export * from "./spark-manager";
export * from "./uav-manager";
export * from "./label-manager";
export * from "./sky";
export * from "./loader";

export function randomPoints(center, radius, amount) {
  var features = [];
  for (var i = 0; i < amount; i++) {
    features.push({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          center[0] + radius * (Math.random() - 0.5) * 2,
          center[1] + radius * (Math.random() - 0.5) * 2,
          (center[2] || 0) + radius * Math.random(),
        ],
      },
      properties: { count: 10 * Math.random() },
    });
  }
  return features;
}
