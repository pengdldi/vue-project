<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1" />
            <span> + </span>
            <input type="text" v-model="num2" />
            <span> = </span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>
<script>
import {reactive, computed, toRefs} from 'vue';
function plusCalculator() {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1)+parseInt(state.num2))
    });
    return toRefs(state); //toRefs를 사용하여 반응형 객체의 속성들을 개별적인 반응형 참조로 변환
}
export default {
    name: 'calculatorAPI',
    setup() {
        let {num1, num2, result} = plusCalculator(); //plusCalculator 함수 호출하여 num1, num2, result를 가져옴

        return{
            num1, num2, result
        }
    }
}
</script>

<!-- 단, 이 코드는 현재 컴포넌트 내에서만 사용 가능 -->