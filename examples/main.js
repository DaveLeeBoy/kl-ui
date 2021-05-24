import Vue from 'vue'
import App from './App.vue'
import { kLink } from '../packages';
// import { kLink } from '../packages/kLink'

Vue.config.productionTip = false
Vue.use(kLink)


new Vue({
  render: h => h(App),
}).$mount('#app')
