<template>
  <div style="width:300px">
    <label>자동완성 셀렉트 (flat 구조)</label>
    <TreeSelect
      v-model="selected"
      :options="options"
      :searchable="true"
      placeholder="검색해서 선택하세요"
    />
    <p>선택된 값: {{ selected }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AutoCompleteFlat',
  setup() {
    const selected = ref(null)

    const options = [
      { id: 'dog', label: '강아지' },
      { id: 'dogg', label: '멍멍이' },
      { id: 'cat', label: '고양이' },
      { id: 'catt', label: '야옹이' },
      { id: 'parrot', label: '앵무새' }
    ]

    return { selected, options }
  }
})
</script>
