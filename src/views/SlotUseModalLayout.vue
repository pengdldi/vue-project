<modal-layout>
    <template v-slot:header>
        <h1>팝업 타이틀</h1>
    </template>
    <template v-slot:default>
        <p>팝업 내용1</p>
        <p>팝업 내용2</p>
    </template>
    <template v-slot:footer>
        <button type="button">닫기</button>
    </template>
</modal-layout>

<!-- v-slot: 대신 단축어로 #을 사용할 수 있음. [template #header]-->