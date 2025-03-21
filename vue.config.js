const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true,
  lintOnSave: false,

  chainWebpack: (config) => {
    // 获取处理 js 文件的规则
    const jsRule = config.module.rule("js");
    // 添加需要忽略的文件或文件夹的正则表达式
    jsRule.exclude.add(/src\/utils\/bmap\/mapv-three/);

    // 添加路径别名
    config.resolve.alias.set(
      "mapv-three",
      path.resolve(__dirname, "src/utils/bmap/mapv-three/")
    );
  },
});
