<template>
    <input type="text" v-focus />
</template>
<script>
export default {
    //커스텀 디렉티브 등록 , main.js는 전역등록
    directives: {
        focus: {
            mounted(el) {
                el.focus()
            }
        }
    }
}
</script>