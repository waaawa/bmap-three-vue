/**
 * 获取geojson里的features数组
 * @param {object} feature geojson数据
 * @param {string} projectionName 投影方式名
 */
export function getGeoFeatures(data: any, projectionName: string): any;
/**
 * 投影坐标递归函数
 * @param {Array<number>} coordinates 原始坐标数组
 * @param {string} projectionName 投影方式名
 */
export function projectCoordinates(coordinates: Array<number>, projectionName: string): any;
/**
 * 具体计算投影坐标过程
 * @param {Array<number>} coordinates 坐标数组
 * @param {string} projectionName 投影方式名
 */
export function projectPointArr(coordinates: Array<number>, projectionName: string): any[];
/**
 * 投影坐标转为原始经纬度坐标过程
 * @param {Array<number>} coordinates 坐标数组
 * @param {string} projectionName 投影方式名
 */
export function unprojectPointArr(coordinates: Array<number>, projectionName: string): any[];
/**
 * 将feature对象处理成标准geojson格式
 * @param {object} feature geojson的feature对象
 */
export function fixFeature(feature: object): object;
/**
 * MultiPoint拆成多个单个Point
 * @param {object} feature geojson的feature对象
 * @param {string} projectionName 投影方式名
 */
export function multiPointToPoints(feature: object, projectionName: string): object[];
/**
 * MultiLineString拆成多个单个LineString
 * @param {object} feature geojson的feature对象
 * @param {string} projectionName 投影方式名
 */
export function multiLineStringToLineStrings(feature: object, projectionName: string): object[];
/**
 * MultiPolygon拆成多个单个Polygon
 * @param {object} feature geojson的feature对象
 * @param {string} projectionName 投影方式名
 */
export function multiPolygonToPolygons(feature: object, projectionName: string): object[];
/**
 * 将线数据转成点数据
 * @param {object} geojson geojson数据
 */
export function convertLineString2Points(geojson: object): any[];
/**
 * 将面数据转成线数据
 * @param {object} geojson geojson数据
 */
export function convertPolygon2LineString(geojson: object): any[];
/**
 * 用于遍历GeoJSON数据
 *
 * @param {object} geojson GeoJSON对象，可以是FeatureCollection、Feature或Geometry对象
 * @param {Function} callback 回调函数，用于处理每个坐标
 * @param {boolean} excludeWrapCoord 是否包含坐标wrap。默认为false，即包含坐标wrap
 */
export function coordEach(geojson: object, callback: Function, excludeWrapCoord: boolean): false | undefined;
/**
 * 遍历GeoJSON的geometry对象并调用回调函数对每个几何对象进行处理。
 *
 * @param {object} geojson GeoJSON几何对象。
 * @param {Function} callback 处理几何对象的回调函数。
 */
export function geomEach(geojson: object, callback: Function): false | undefined;
/**
 * 针对geojson中的Feature进行遍历
 *
 * @param {object} geojson geojson数据对象
 * @param {Function} callback 回调函数，当遍历到Feature时，会调用该回调函数
 */
export function featureEach(geojson: object, callback: Function): void;
/**
 * 对GeoJSON对象进行reduce操作
 *
 * @param {object} geojson 地理几何数据
 * @param {Function} callback 回调函数，用于累加计算
 * @param initialValue 初始值
 * @returns 返回最终的累加器值
 */
export function geomReduce(geojson: object, callback: Function, initialValue: any): any;
/**
 * 获取GeoJSON对象的bounding box
 *
 * @param {object} geojson 几何对象的GeoJSON格式
 * @param {object} options 参数对象，默认选项为{}
 * @param {boolean} options.recompute 是否忽略已有的边界框，重新计算。默认为false
 * @returns 边界框，由四个数值[xmin, ymin, xmax, ymax]组成的数组
 */
export function getbbox(geojson: object, options?: {
    recompute: boolean;
}): any;
/**
 * 获取坐标信息
 *
 * @param {object | Array} coords GeoJSON Feature, Geometry Object 或坐标数组
 * @returns {Array} 返回坐标数组
 * @throws 当参数不是GeoJSON Feature, Geometry Object 或坐标数组时会抛出错误
 */
export function getCoord(coords: object | any[]): any[];
/**
 * 从一个Feature或Geometry对象中获取Geometry
 * @param {object} coords GeoJSON Feature, Geometry Object 或坐标数组
 * @param {object} geometry对象
 */
export function getGeom(geojson: any): any;
/**
 * 判断点(pt)是否在边界框(bbox)内
 *
 * @param {Array<number>} pt 点的坐标，形如[x, y]
 * @param {Array<number>} bbox 边界框的坐标，形如[x1, y1, x2, y2]
 * @returns 若点在矩形框内则返回true，否则返回false
 */
export function inBBox(pt: Array<number>, bbox: Array<number>): boolean;
/**
 * 判断一个点是否在多边形区域内
 *
 * @param {Array<number>} point 点的坐标，如：[x, y]
 * @param {object} polygon Polygon类型的GeoJSON
 * @param {object} options 可选参数，其中ignoreBoundary表示是否忽略边界，默认为false
 * @returns 返回布尔值，表示点是否在多边形内
 */
export function booleanPointInPolygon(point: Array<number>, polygon: object, options?: object): boolean;
/**
 * 生成一个Feature对象
 *
 * @param {object} geom geometry对象
 * @param {object} properties properties对象
 * @param {object} options 可选参数，如id和bbox等
 * @returns Feature对象
 */
export function feature(geom: object, properties: object, options?: object): {
    type: string;
};
/**
 * 生成FeatureCollection对象
 *
 * @param {object} features - Feature数组
 * @param {object} options - 可选参数对象，包含以下属性：
 * @param {number} options.id id
 * @param {Array<number>} options.bbox bbox
 * @returns {object} FeatureCollection对象
 */
export function featureCollection(features: object, options?: {
    id: number;
    bbox: Array<number>;
}): object;
/**
 * 将坐标数组转换为Point类型的GeoJSON对象
 *
 * @param {Array} coordinates 坐标数组，必须为非空数组，且至少包含两个数字
 * @param {object} properties 点的属性，为可选参数，默认为空对象
 * @param {object} options 可选参数，用于控制点对象生成的一些选项，默认为空对象
 * @returns {object} 返回一个点对象，包含coordinates, properties和options三个属性
 * @throws 当 coordinates 参数不合法时会抛出异常
 */
export function coordToPoint(coordinates: any[], properties: object, options?: object): object;
/**
 * 将坐标转换为Polygon类型GeoJSON对象
 *
 * @param {Array} coordinates - 包含坐标数组的线性环
 * @param {object} properties - 包含属性对象
 * @param {object} options - 包含选项对象
 * @returns {object} Polygon类型GeoJSON对象
 * @throws 如果线性环的数量少于4或第一个位置和最后一个位置不相等，将抛出错误
 */
export function coordToPolygon(coordinates: any[], properties: object, options?: object): object;
/**
 * 计算 GeoJSON 的面积
 *
 * @param {object} geojson GeoJSON 对象
 * @returns {number} 面积
 */
export function computeGeoJSONArea(geojson: object): number;
/**
 * 获取几何中心点
 *
 * @param {object} geojson 几何体 GeoJSON
 * @param {object} options 可选参数对象
 * @returns {object} 中心点坐标的 Point GeoJSON
 */
export function getcenter(geojson: object, options?: object): object;
