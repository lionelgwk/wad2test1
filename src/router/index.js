import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyEvents from '../views/MyEvents.vue'
import CreateEvent from '../views/CreateEvent.vue'
import RegisterAccount from '../views/RegisterAccount.vue'
import SignIn from '../views/SignIn.vue'
import HomeLogin from '../views/HomeLogin.vue'
import CreateSuccess from '../views/CreateSuccess.vue'
import EventDetails from '../views/EventDetails.vue'
import NotFound from '../views/NotFound.vue'


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
    component: MyEvents,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/homelogin',
    name: 'homelogin',
    component: HomeLogin,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/createevent',
    name: 'createevent',
    component: CreateEvent,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/registeraccount',
    name: 'registeraccount',
    component: RegisterAccount
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/createsuccess',
    name: 'createsuccess',
    component: CreateSuccess,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/myevents/:id',
    name: 'eventdetails',
    component: EventDetails,
    props: true,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    }
    else{
      next("/");
    }
  }
  else{
    next();
  }
});