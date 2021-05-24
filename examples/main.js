import Vue from 'vue'
import App from './App.vue'
import kUi from '../packages';

Vue.config.productionTip = false
Vue.use(kUi)


new Vue({
  render: h => h(App),
}).$mount('#app')
