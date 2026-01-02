// const target = 'http://127.0.0.1:3000'; //proxy 요청을 보낼 서버 주소
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  chainWebpack: config => {
  config.plugins.delete('prefetch'); //prefetch삭제
  },
  devServer: {
    port:8080,
    proxy: {
     // proxy 요청을 보낼 api 시작 부분
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    },
    headers: {
      'Content-Security-Policy': "default-src 'self' https://apis.google.com https://accounts.google.com https://www.gstatic.com; script-src 'self' 'unsafe-inline' https://apis.google.com https://accounts.google.com https://www.gstatic.com; script-src-elem 'self' https://apis.google.com https://accounts.google.com https://www.gstatic.com; connect-src 'self' https://accounts.google.com https://www.googleapis.com ws: wss: http://192.168.0.205:8080; frame-src https://accounts.google.com https://apis.google.com https://www.gstatic.com; img-src 'self' data: https://www.gstatic.com; style-src 'unsafe-inline' https://fonts.googleapis.com;"
    }
  }
}

