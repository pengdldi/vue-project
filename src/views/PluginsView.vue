<template>
    <div>
        <h2>{{$translate("ko.hi")}}</h2> <!-- $translate으로 이용 -->
        <h2>{{i18n.en.hi}}</h2> <!-- i18n 객체를 inject로 받아서 사용 -->
    </div>
</template>
<script>
export default {
    inject: ['i18n'], //부모 컴포넌트에서 제공하는 i18n 주입
    mounted() {
        console.log(this.i18n);
    }
};
</script>