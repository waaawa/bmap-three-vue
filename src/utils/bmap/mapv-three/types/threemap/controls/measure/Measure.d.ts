export class Measure {
    /**
     * 根据两个坐标点和地球半径计算得到两点之间的距离
     * @param {numberp[]} startCoordibates 起点坐标
     * @param {number[]} endCoordinates 终点坐标
     * @param {string} component 测量分量
     * @param {number} radius 地球半径
     * @returns 距离
     */
    static getLength(startCoordibates: any[], endCoordinates: number[], component: string, radius: number): number;
    /**
     * 根据一组坐标数组，得到相邻两点之间的分段距离
     * @param {number[][]} points 坐标数组
     * @returns {number[]} 分段距离
     */
    static getSegementLength(points: number[][], component: any): number[];
    /**
     * 根据一组坐标，计算得到面积
     * @param {number[][]} coordinates 坐标数组
     * @param {number} radius 地球半径
     * @returns 面积
     */
    static getArea(coordinates: number[][], radius: number): number;
    static getSpaceArea(coordinates: any, radius: any): number;
    /** @protected */ protected _enabled: boolean;
    /** @protected */ protected _fixedNum: number;
    /** @protected */
    protected afterAddToEngine(): void;
    /** @protected */
    protected _addNode: (data: any) => void;
    /** @protected */
    protected _moveNode: (data: any) => void;
    /** @protected */
    protected _changeNode: (data: any) => void;
    set fixedNum(arg: number);
    get fixedNum(): number;
    set enabled(arg: boolean);
    /**
     * 是否能够进行测量
     */
    get enabled(): boolean;
}
