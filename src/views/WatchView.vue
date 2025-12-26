<template>
    <h1>Full Name: {{fullName}}</h1>
</template>
<script>
export default {
    data() {
        return {
            firstName: 'Seungwon',
            lastName: 'Hwang',
            fullName: ''
        };
    },
    watch: {
        firstName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        },
        lastName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        }
    }
}
</script>
<!-- 이렇게 하면 아무것도 출력되지 않음. watch는 실제로 변경이 일어나야 작동하고 출력됨 -->