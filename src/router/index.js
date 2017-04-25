import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const lazyLoading = (name) => (resolve) => require([`../pages/${name}`], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: lazyLoading('Test')
    },
    {
      path: '/explain',
      name: 'explain',
      component: lazyLoading('Explain')
    },
    {
      path: '/dir-tree',
      name: 'dir-tree',
      component: lazyLoading('DirectoryTree')
    }
  ]
})
