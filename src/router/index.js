import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkinView from '../views/SkinView.vue'
import KeranjangView from '../views/KeranjangView'
import AboutView from '../views/AboutView'
import PesanView from '../views/PesanView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/skin',
    name: 'Skin',
    component: SkinView
  },

  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/keranjang/:id',
    name: 'pesan',
    component: PesanView
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
