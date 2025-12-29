<template>
    <CompositionAPIInject />
</template>
<script>
import {provide} from 'vue';
import CompositionAPIInject from './CompositionAPIInject.vue';
export default {
    components: {
        CompositionAPIInject
    },
    setup() {
        provide('title','Vue. js 프로젝트'); //Provide로 'title'이라는 키로 값을 제공
    }
}
</script>