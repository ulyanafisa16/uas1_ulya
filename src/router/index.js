import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KeranjangView from '../views/KeranjangView'
import AboutView from '../views/AboutView'
import PesanView from '../views/PesanView'
import TroliView from '../views/TroliView'
import SuksesView from '../views/SuksesView'
;

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  

  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangView
  },

  {
    path: '/tentang',
    name: 'tentang',
    component: AboutView
  },

  {
    path: '/keranjang/:id',
    name: 'pesan',
    component: PesanView
  },

  {
    path: '/troli',
    name: 'troli',
    component: TroliView
  },

  {
    path: '/sukses',
    name: 'sukses',
    component: SuksesView
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
