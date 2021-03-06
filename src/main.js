import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from '@/utils/dayjs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import vueAplayer from 'vue-aplayer'

Vue.use(vueAplayer)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  dayjs,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
