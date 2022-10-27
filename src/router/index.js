import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyEvents from '../views/MyEvents.vue'
import CreateEvent from '../views/CreateEvent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/myevents',
    name: 'myevents',
    component: MyEvents
  },
  {
    path: '/createevent',
    name: 'createevent',
    component: CreateEvent
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
