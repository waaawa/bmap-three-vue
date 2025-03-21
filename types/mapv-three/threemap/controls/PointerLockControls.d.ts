/**
 * 第一人称视角控制控件
 * 使用方法：激活控件后，通过键盘进行移动，可以开启lock进行视野旋转
 * - W：向前移动
 * - A：向左移动
 * - S：向后移动
 * - D：向右移动
 * - L：旋转视野
 *
 * ```js
 * const control = new mapvthree.PointerLockControl(engine);
 * // 开启鼠标控制
 * control.enableKeyboardEvent = true;
 * // 设置移动距离
 * control.forwardStepSize = 10;
 * control.rightStepSize = 20;
 * ```
 */
export class PointerLockControl extends PointerLockControls {
    constructor(engine: any);
    /** @private */ private _enableKeyboardEvent;
    /** @private */ private _moveForward;
    /** @private */ private _moveBackward;
    /** @private */ private _moveLeft;
    /** @private */ private _moveRight;
    /** @private */ private _moveTop;
    /** @private */ private _moveBottom;
    /** @private */ private _prevTime;
    /** @private */ private _velocity;
    /** @privare */ _direction: any;
    _engine: any;
    set stepSize(arg: any);
    set enableKeyboardEvent(arg: any);
    /**
     * @private
     */
    private handleKeyDownEvent;
    animationMove: () => void;
    /**
     * @private
     */
    private handleKeyUpEvent;
    set forwardStepSize(arg: any);
    /** 前后方向步进 */
    get forwardStepSize(): any;
    _forwardStepSize: any;
    set rightStepSize(arg: any);
    /** 左右方向步进 */
    get rightStepSize(): any;
    _rightStepSize: any;
    set topStepSize(arg: any);
    /** 上下方向步进 */
    get topStepSize(): any;
    _topStepSize: any;
}
import { PointerLockControls } from "../../threejs/controls/PointerLockControls";
