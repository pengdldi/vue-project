<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="../assets/kakao_login_medium_narrow.png" alt="카카오 로그인 버튼"/>
        </a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sampleData: ''
        };
    },
    methods: {
        kakaoLogin() {
            window.Kakao.Auth.login({
                scope : 'profile_nickname, profile_image, account_email',
                success : this.getKakaoAccount,
            });
        },
        getKakaoAccount() { //동의하고 계속하기 버튼 클릭 -> redirect urldls 8080/login을 호출. 이때 getKakaoAccount 함수 실행.
            window.Kakao.API.request({
                url:'/v2/user/me',
                success : res => {
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile.nickname;
                    const email = kakao_account.email;
                    console.log('nickname : ',nickname);
                    console.log('email : ',email);
                    alert("로그인 성공!");
                },
                fail : error => {
                    console.log(error);
                }
            })
        },
        kakaoLogout() {
            window.Kakao.auth.logout((response) => {
                //로그아웃 성공 시, response는 undefined
                console.log(response);
            });
        }
    }
}
</script>