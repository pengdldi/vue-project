<template>
    <div>
        <h1 v-if="type=='A'">A</h1> <!-- type이 true면 화면이 보이게 됨-->
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            type: 'A'
        };
    }
}
</script>
<!-- v-if와 v-show의 차이
    v-if는 조건을 만족하면 그 순간에 html 블록 생성. 만족하지 않으면 html 블록을 삭제
    v-show는 조건 상관없이 무조건 html 블록 생성. css display만 보이지 않는 것. 화면을 숨겨만 두는 것
    !!해당 html블록이 자주 나타나야 하면 v-show 사용. toggle 빈도가 적으면 v-if 사용!! -->