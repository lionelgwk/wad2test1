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
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDug7cjjrHQnH2kXpXXNNmfAcNWzfy524E",
//   authDomain: "wad2test1.firebaseapp.com",
//   databaseURL: "https://wad2test1-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "wad2test1",
//   storageBucket: "wad2test1.appspot.com",
//   messagingSenderId: "1079852291342",
//   appId: "1:1079852291342:web:b9452aa94fc57c5ce2735f",
//   measurementId: "G-43TS1XSPJ9"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// /* eslint-disable */
// const analytics = getAnalytics(app);
// /* eslint-enable */

let app = createApp(App);
app.use(VueGeolocation); 
app.use(GMaps, {
    load: {
        apiKey: "AIzaSyCTHZllCldMYoM9ByF8AcxKPWvIuFJsTx4",
        libraries: ['places']
    }
});
app.use(store).use(router).use(AOS.init()).mount('#app')
