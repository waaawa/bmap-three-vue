/**
 * 模型跟随指定路径移动，通过导出update函数传入t来更新位置
 * @param {*} param0
 */
function useMoveAnimation({ model, pos, step }) {
  // 获取position数组
  const path = new THREE.CatmullRomCurve3(pos);

  let t = 0;

  function update() {
    if (t >= 1) return;

    t = Math.min(1, t + step);

    model.position.copy(path.getPointAt(t));
  }

  return {
    update,
  };
}
