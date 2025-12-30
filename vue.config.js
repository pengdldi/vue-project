const target = 'http://127.0.0.1:3000'; //proxy 요청을 보낼 서버 주소
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port:8080,
    proxy: {
      //proxy 요청을 보낼 api 시작 부분
      '^/api': {
        target,
        changeOrgin: true
      }
    }
  }, 
  chainWebpack: config => {
  config.plugins.delete('prefetch'); //prefetch삭제
  }
}

