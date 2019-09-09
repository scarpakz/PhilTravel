import Vue from 'vue'
import Router from 'vue-router'
import Page from './views/Page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page
    },
  ]
})
