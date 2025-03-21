import { GLTFLoader } from "bmap-three/examples/jsm/loaders/GLTFLoader";

export const gltfLoader = new GLTFLoader();

/**
 * 加载GLTF模型
 * @param {Object} params - 加载参数对象
 * @param {string} params.url - GLTF模型的URL地址
 * @param {Function} [params.onProgress] - 加载进度回调函数
 * @returns {Promise<THREE.GLTF>} 返回加载完成的GLTF对象
 */
export async function loadGLTF({ url, onProgress }) {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      function (gltf) {
        resolve(gltf);
      },
      onProgress,
      (e) => {
        reject(e);
      }
    );
  });
}
