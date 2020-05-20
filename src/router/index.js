import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name:
    component: () => import('@/views/layout'),
    children: [
      // {
      //   path: '',
      //   name: 'home',
      //   component: () => import('@/views/home')
      // },
      {
        path: '/discover',
        name: 'discover',
        component: () => import('@/views/discover')
      },
      {
        path: '/playlists',
        name: 'playlists',
        component: () => import('@/views/playlists')
      },
      {
        path: '/songs',
        name: 'songs',
        component: () => import('@/views/songs')
      },
      {
        path: '/mvs',
        name: 'mvs',
        component: () => import('@/views/mvs')
      },
      {
        path: '/collect',
        name: 'collect',
        component: () => import('@/views/collect')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
