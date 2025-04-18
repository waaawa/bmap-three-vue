export function increaseTileLoading(): void;
export function decreaseTileLoading(): void;
export function getNumTileLoading(): number;
export function setNumTileLoading(num: any): void;
export function getMaxTileLoading(): number;
export function setMaxTileLoading(num: any): void;
export function getGeometryBudget(): number;
export function setGeometryBudget(num: any): void;
export function getTilesDownloadQueue(downloadQueue: any): any;
export function getTilesParseQueue(parseQueue: any): any;
export function getTilesLruCache(): any;
export function setTilesDownloadQueue(downloadQueue: any): boolean;
export function setTilesLruCache(lruCache: any): boolean;
export function setTilesParseQueue(parseQueue: any): boolean;
export const BloomLayer: any;
export const workServiceManeger: WorkerServiceManeger;
export const lru: LRU;
export const debuggerMode: false;
export const PointcloudStore: any;
export const TileStore: any;
export const ModelStore: any;
export const darkMeshMaterial: any;
export const darkLineMaterial: any;
export const darkPointMaterial: any;
export const darkSpriteMaterial: any;
export const dracoLoader: any;
export const ktx2Loader: any;
import { WorkerServiceManeger } from "../mapTile/workers/WorkerServiceManager";
import { LRU } from "./LRU";
