<template>
  <div style="width:300px">
    <label>자동완성 (Spring API fetch)</label>
    <TreeSelect
      v-model="selected"
      :async="true"
      :searchable="true"
      :clearable="true"
      :load-options="loadOptions"
      placeholder="검색어를 입력하세요"
    />
    <p>선택된 값: {{ selected }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AutoCompleteFetch',
  setup() {
    const selected = ref(null)

    /**
     * 자동완성 키 입력 시 호출되는 함수
     * @param {Object} context - { searchQuery, callback }
     */
    const loadOptions = async ({ searchQuery, callback }) => {
      if (!searchQuery) {
        return callback(null, [])
      }

      try {
        const response = await fetch(`/api/search?keyword=${encodeURIComponent(searchQuery)}`)
        if (!response.ok) {
          throw new Error(`실패 - 입력된 값 ${searchQuery}`)
        }

        const data = await response.json()

        const options = data.map(item => ({
          id: item.id,
          label: item.label
        }))

        callback(null, options)
      } catch (error) {
        console.error('자동완성 fetch 실패:', error)
        callback(error)
      }
    }

    return {
      selected,
      loadOptions
    }
  }
})
</script>
