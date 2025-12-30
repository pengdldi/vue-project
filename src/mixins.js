import axios from 'axios';

/* vue.config.js의 proxy 설정 없이 개발환경&운영환경에서 cors 문제 해결 */
axios.defaults.baseURL = 'http://localhost:3000'; //서버주소
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
/* 여기까지 */

export default {
    methods: {
        async $api(url, method, data) {
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;

            }
        }
    }