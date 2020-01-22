module.exports = {
  devServer: {
    open: true,
    port: 8888,
    host: '0.0.0.0',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://118.190.84.130:9080',
        changOrigin: true, // 保留主机头的原点
        pathRewrite: {
          '^/api': '',
        },
      }
    },
  }
}