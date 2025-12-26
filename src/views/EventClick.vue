<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button> <!-- v-on 대신 @를 쓸 수 있음 클릭했을 때 increaseCounter 함수 호출 -->
        <p>The counter is : {{counter}} </p>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The counterB is : {{counterB}} </p>
        <button type="button" @click="one(), two()">Click</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0,
            counterB: 0
        };
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter+1;
        },
        setCount(value) {
            this.counterB = value;
        },
        one() {
            alert('One');
        },
        two() {
            alert('Two');
        }
    }
}
</script>