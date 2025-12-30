<template>
    <p>Count: {{count}}</p>
    <p>Cart Count: {{cartCount}}</p>
    <button type="button" @click="increment">Increment</button>
</template>
<script>
export default {
    computed: { //state에 정의된 변수를 항상 추적
        count() {
            return this.$store.state.count;
        },
        cartCount() { //getters에 정의된 값 접근
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        increment() { //저장소의 state에 바로 접근X,저장소 내 mutations에 정의된 함수는 commit을 통해서 값 변경. 
            this.$store.commit('increment');
        }
    }
}
</script>