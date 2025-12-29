<template>
    <child-component @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
    components: {ChildComponent},
    method() {
        this.$refs.child_component.$refs.btn.click();
    }
}
</script>