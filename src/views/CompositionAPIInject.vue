<template>
    <h1>{{title}}</h1>
</template>
<script>
import {inject} from 'vue';
export default {
    setup() {
        const title = inject('title'); //Provide된 'title'을 주입받음
        return{
            title
        };
    }
}
</script>