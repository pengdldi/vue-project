<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="state.num1" />
            <span> + </span>
            <input type="text" v-model="state.num2" />
            <span> = </span>
            <span>{{ state.result }}</span>
        </div>
    </div>
</template>
<script>
import {reactive, computed} from 'vue';
export default {
    name: 'calculatorAPI',
    setup() {
        let state = reactive({
            num1: 0,
            num2: 0,
            result: computed(() => parseInt(state.num1)+parseInt(state.num2)) //computed 이용하면 num1,num2가 변경될 때마다 자동으로 result값이 변경됨
        });
        return{
            state
        }
    }
}
</script>

<!-- 단, 이 코드는 현재 컴포넌트 내에서만 사용 가능 -->