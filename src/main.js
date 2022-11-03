import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import VueGeolocation from "vue3-geolocation";
import GMaps from "vuejs3-google-maps";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'aos/dist/aos.css'

// Import the functions you need from the SDKs you need


let app = createApp(App);
app.use(VueGeolocation); 
app.use(GMaps, {
    load: {
        apiKey: "AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4",
        libraries: ['places']
    }
});
app.use(store).use(router).use(AOS.init()).mount('#app')
