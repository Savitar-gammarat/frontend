import Vue from 'vue'
import Router from 'vue-router'
import frontpage from './views/frontpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'frontpage',
      component: frontpage
    }
  ]
})
