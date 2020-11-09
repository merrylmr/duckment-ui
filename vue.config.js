module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/var.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://duckment.bysir.top:1080/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  }
}