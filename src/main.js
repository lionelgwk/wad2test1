import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'aos/dist/aos.css'

createApp(App).use(store).use(router).use(AOS.init()).mount('#app')
