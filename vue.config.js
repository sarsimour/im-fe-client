module.exports = {
  devServer: {
    open: true,
    proxy: 'http://127.0.0.1:7001',
    port: 3000
  },
  css: {
    loaderOptions: {
      sass: {
        // 不再需要sass-resources-loader
        prependData: '@import "@/common/style/var/color.scss";@import "@/common/style/var/size.scss";'
      }
    }
  }
};
