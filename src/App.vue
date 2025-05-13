<template>
  <div id="app">
    <AcMultiFlat/>
    <AcMultiFetch/>
  </div>
</template>
<script>
import AcMultiFlat from './components/customMulti/AcMultiFlat.vue'
import AcMultiFetch from '@/components/customMulti/AcMultiFetch.vue'

export default {
  name: 'App',
  components: {
    AcMultiFlat,
    AcMultiFetch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
