<template>
    <div>
        <div id="naverIdLogin"></div>
        <button type="button" @click="logout">네이버 로그아웃</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            naverLogin: null
        };
    },
    mounted() {
        this.naverLogin = new window.naver.LoginWithNaverId({
            clientId: "Ai2KCHpQCaSuPhABPdfq", //개발자센터에 등록한 Client ID
            callbackUrl: "http://localhost:8080/naverlogin", //개발자센터에 등록한 Callback URL
            isPopup: false, // 팝업을 통한 연결 여부. true: 팝업, false: 새창
            loginButton: { color: "green", type: 3, height: 60 }, // 로그인 버튼의 타입, 크기, 색깔 지정
        });
        //설정 정보를 초기화하고 연동 준비
        this.naverLogin.init();

        this.naverLogin.getLoginStatus((status) => {
            console.log('getLoginStatus:', status);
            console.log('location.href:', window.location.href);
            console.log('accessToken:', this.naverLogin.accessToken);
            console.log('user:', this.naverLogin.user);
            console.log('location:', window.location.href);
            console.log('getLoginStatus:', status);
            console.log('naverLogin object:', this.naverLogin);
            if (status) {
                console.log(status);
                console.log(this.naverLogin.user);

                //필수 프로필 정보가 있으면 callback 처리 시점에 체크
                var email = this.naverLogin.user.getEmail();
                if( email == undefined || email == null ) {
                    alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
                    //사용자 정보 재동의를 위해 다시 네이버 동의 페이지로 이동
                    this.naverLogin.reprompt();
                    return;
                } 
            } else {
                console.log("callback 처리에 실패하였습니다.");
            }
        });
    },
    methods: {
        logout() {
            const accessToken = this.naverLogin.accessToken.accessToken;
            const url = `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=Ai2KCHpQCaSuPhABPdfq&client_secret=_jBARl08l1&access_token=${accessToken}&service_provider=NAVER`;
            axios.get(url).then((res) => {
                console.log(res.data);
            
            });
        }
    }
}
</script>