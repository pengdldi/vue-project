//다국어 처리해주는 플로그인 제작
export default {
    install: (app, options) => {
        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o, i) => {
                if (o) return o[i];
            }, options)
        }
        app.provide('i18n', options); //i18n이라는 키값 다국어 데이터 전달
        //inject('i18n')로 받아서 사용도 가능
    }
}