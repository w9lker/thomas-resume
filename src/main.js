import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Research from './components/Research.vue'
import Teaching from './components/Teaching.vue'
import Awards from './components/Awards.vue'
import AboutMe from './components/AboutMe.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/research', component: Research },
  { path: '/teaching', component: Teaching },
  { path : '/awards', component: Awards},
  { path: '/aboutme', component: AboutMe },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Vue.use(VueSmoothScroll)
const app =createApp(App);
app.use(router)
app.mount('#app')