import axios from 'axios';
export default {
    methods: {
        async $callAPI(url, method, data) { //$를 붙인 이유는 prefix를 이용해서 오버라이딩을 방지, 컴포넌트 메소드명과 구분. 이건 믹스인 파일 메소드
            return (await axios ({
                method: method,
                url,
                data
            }).catch(e=> {
                console.log(e)
            })).data;
        }
    }
}