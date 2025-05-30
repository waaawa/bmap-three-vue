export function setAssetsPath(path: any): void;
export function setHost(host: any): void;
export function setProjectID(projectId: any): void;
export function setHeaders(headers: any): void;
/**
 * 从接口获取全部数据
 * @param config
 * @returns {Promise<{sceneConfig: {}, deviceList: [], lodUrl: string}>}
 */
export function getAllData(config?: {}): Promise<{
    sceneConfig: {};
    deviceList: [];
    lodUrl: string;
}>;
export function queryDeviceByRadius(config?: {}): Promise<any>;
export function combineModelUrl(resourceUrl?: {}, data?: any[]): any[];
export function combineDeviceUrl(resourceUrl?: {}, data?: any[]): any[];
export function combineMaterialUrl(resourceUrl?: {}, data?: any[]): any[];
export function combineSceneUrl(resourceUrl?: {}, data?: {}): {};
export function updateDeviceInfo(data: any): Promise<any>;
export function deleteDevice(uuid: any, project_id: any): Promise<any>;
export function getGroup3dDeviceinfo(info?: {}): Promise<any>;
export function getSceneParadeBySceneId(scene_id: any): Promise<any>;
export function getScene(sceneId: any): Promise<any>;
export function getProjectDetail(projectId: any): Promise<any>;
export function getMaterialInfo(): Promise<any>;
export function getAllModels(projectId: any): Promise<any[]>;
export function getDeviceList(projectId: any, uuid: any): Promise<any>;
export function getResourcePrefix(): Promise<any>;
export function getDeviceByRadius(params: any): Promise<any>;
export function connectAssetsSync(host: any): Promise<{
    ws: Ws;
    connect: any;
}>;
export function checkAuth(params: any, host: any, path?: string): Promise<any>;
export function connectDeviceActiveInfo(host: any, path?: string): Promise<{
    ws: Ws;
    connect: any;
}>;
import { Ws } from "../utils/ws";
