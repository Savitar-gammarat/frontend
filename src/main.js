import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import global from './global'

Vue.use(VueMaterial)
Vue.config.productionTip = false
axios.defaults.baseURL = "http://tamakooo.com:5000/api/v0"
Vue.prototype.$global = global

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
