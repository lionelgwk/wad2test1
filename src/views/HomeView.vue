<template>
  <div
      class="page-header min-vh-100"
      :style="{
        backgroundImage: `url(${bgImage})`
      }"
      loading="lazy"
    >

    <h1 class="text-white text-center mb-4">Welcome to <span class="party">Party</span>Goers</h1>
    <h4 class="text-white text-center fst-italic">The best way to plan outings with your friends.
    </h4>

  <h1> Create an Account </h1>
  <p> <input type='text' placeholder="Email" v-model='email'/> </p>
  <p> <input type='password' placeholder="Password" v-model='password'/> </p>
  <p> <button @click="register"> Submit </button> </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' // import router

const email = ref('')
const password = ref('')

const router = useRouter() // get a reference to our vue router
const register = () => {
  createUserWithEmailAndPassword(getAuth(),email.value, password.value) // need .value because ref()
  .then((data) => {
    console.log('Successfully registered!');
    router.push('/feed') // redirect to the feed
  })
  .catch(error => {
    console.log(error.code)
    alert(error.message);
  });
}

const bgImage =
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80";

</script>



<script>
// @ is an alias to /src

  
export default {
  name: 'HomeView',
  components: {
}
}
</script>

<style scoped>
h1 {
  margin-top: 60px;
  color: black;
  font-weight: bold;
}

.party {
  margin-top: 60px;
  color: crimson;
  font-weight: bold;
}
</style>
