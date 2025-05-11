import Vue from 'vue'
import App from './App.vue'

import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

Vue.component('TreeSelect', Treeselect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
