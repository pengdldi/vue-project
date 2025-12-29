<template>
    <div></div>
</template>
<script>
import ApiMixin from '../api.js';
export default {
    mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
    data() {
        return {
            productList: []
        };
    },
    async mounted() {
        this.productList = await this.$callAPI("https://9f13fc22-d440-4009-b577-4e3bcbbc0146.mock.pstmn.io/list", "get");
        console.log(this.productList);
    }
}
</script>