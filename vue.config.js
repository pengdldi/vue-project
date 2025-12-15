const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = { chinWeppack: config => {
  config.plugins.delete('prefetch'); //prefetch삭제
}}
