<template>
  <div style="width:300px">
    <label>단일 선택 (flat 구조)</label>
    <TreeSelect
      v-model="selected"
      :options="options"
      placeholder="항목을 선택하세요"
    />
    <p>선택된 값: {{ selected }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SingleFlat',
  setup() {
    const selected = ref(null)

    const options = [
      { id: '1', label: '사과' },
      { id: '2', label: '바나나' },
      { id: '3', label: '포도' }
    ]

    return { selected, options }
  }
})
</script>