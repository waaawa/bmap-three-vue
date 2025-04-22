const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true,
  lintOnSave: false,

  chainWebpack: (config) => {
    // 获取处理 js 文件的规则
    // config.module
    //   .rule("js")
    //   .exclude.add(/src\/utils\/bmap\/mapv-three\/index\.js$/)
    //   .end();
    // // jsRule.exclude.add("/node_modules/**");
    // // jsRule.exclude.add("mapv-three");
    // // 添加路径别名
    // config.resolve.alias.set(
    //   "mapv-three",
    //   path.resolve(__dirname, "src/utils/bmap/mapv-three/")
    // );
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        static: path.resolve(__dirname, "public/static/"),
        // 'mapv-three': path.resolve(__dirname, "public/static/"),
      },
    },
    externals: {
      "mapv-three": "mapvThree",
    },
  },
});
