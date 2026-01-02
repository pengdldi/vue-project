<template>
    <div>
        <div id="google-signin-btn"></div>
    </div>
</template>
<script>
export default {
    mounted() {
        window.gapi.signin2.render("google-signin-btn", {onsuccess: this.onSignIn});
    },
    methods: {
        onSignIn(googleUser) {
            const profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            const id_token = googleUser.getAuthResponse().id_token;
            console.log('ID Token: ' + id_token);
        }
    }
}
</script>