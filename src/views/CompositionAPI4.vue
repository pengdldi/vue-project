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
import {plusCalculator} from '../common.js';
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