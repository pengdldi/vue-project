<template>
    <h1>Full Name: {{fullName}}</h1>
</template>
<script>
export default {
    data() {
        return {
            firstName: 'Seungwon',
            lastName: 'Hwang'
        };
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
</script>
<!-- 여러곳에서 fullname을 사용할 때 연산은 한번만 일어남. -->