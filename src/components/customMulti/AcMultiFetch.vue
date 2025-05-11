<template>
  <div style="width:300px">
    <label>API 자동완성 - 멀티</label>
    <TreeSelect
      :key="treeKey"
      :async="true"
      :searchable="true"
      :load-options="loadOptions"
      :multiple="false"
      :disable-branch-nodes="true"
      :value="currentValue"
      @input="onSelect"
      placeholder="검색 후 선택하세요"
    />

    <div class="selected-list">
      <span v-for="item in selectedItems" :key="item.id" class="selected-item">
        {{ item.label }}
        <button @click="removeItem(item)">x</button>
      </span>
    </div>

    <button @click="saveItems">저장</button>
    <p>저장된 ID 목록: {{ selectedItemsStr }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AutoCompleteFetch',
  setup() {
    // Treeselect 강제 리렌더링을 위한 key
    const treeKey = ref(false);
    const currentValue = ref(null)
    const selectedItems = ref([])
    const selectedItemsStr = ref('')

    const loadOptions = async ({ searchQuery, callback }) => {
      if (!searchQuery) return callback(null, [])
      try {
        const res = await fetch(`/api/search?keyword=${encodeURIComponent(searchQuery)}`)
        const data = await res.json()
        const options = data.map(item => ({ id: item.id, label: item.label }))
        callback(null, options)
      } catch (e) {
        console.error(e)
        callback(e)
      }
    }

    const onSelect = item => {
      const exists = selectedItems.value.find(i => i.id === item)
      if (!exists) {
        selectedItems.value.push({ id: item, label: item }) // 기본은 id와 label 동일하게
      }
      resetTreeselect();

    }
    
    // Treeselect 초기화 함수
    const resetTreeselect = () => {
      // 방법 1: 값 초기화
      currentValue.value = null;
      
      // 방법 2: key를 변경하여 컴포넌트 강제 리렌더링
      treeKey.value = !treeKey.value;
      
    };

    const removeItem = item => {
      selectedItems.value = selectedItems.value.filter(i => i.id !== item.id)
    }

    const saveItems = () => {
      selectedItemsStr.value = selectedItems.value.map(i => i.id).join(',')
    }

    return {
      treeKey,
      selectedItems,
      selectedItemsStr,
      currentValue,
      loadOptions,
      onSelect,
      removeItem,
      saveItems
    }
  }
})
</script>

<style scoped>
.selected-list {
  margin: 10px 0;
}
.selected-item {
  background: #e3f2fd;
  padding: 4px 8px;
  margin-right: 5px;
  border-radius: 3px;
  display: inline-block;
}
.selected-item button {
  background: none;
  border: none;
  margin-left: 5px;
  cursor: pointer;
}
</style>