import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n.js'

const i18nStrings = { 
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

const app = createApp(App);
//전역에 사용하는 법 html에서 v-focus를 써주면 마우스 포커스가 위치하게 됨
// app.directive('focus', {
//     mounted(el) {
//         el.focus() 
//     }
// })
app.use(i18nPlugin, i18nStrings); //다국어 번역이 필요한 내용을 i18nStrings에 정의하고 i18nPlugin 플러그인에 전달
app.use(router);
app.mixin(mixins);
app.mount('#app');


window.Kakao.init("6deb711c27ac2ce163a6efde44876d0d"); //발급받은 javascript key 입력