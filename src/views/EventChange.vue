<template>
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value ="서울">서울</option>
            <option value ="부산">부산</option>
            <option value ="대구">대구</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedValue: ''
        };
    },
    methods: {
        changeSelect() {
            alert(this.selectedValue);
        }
    }
}
</script>