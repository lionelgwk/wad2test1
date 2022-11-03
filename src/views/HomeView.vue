<template>
  <div
      class="page-header min-vh-100"
      :style="{
        backgroundImage: `url(${bgImage})`
      }"
      loading="lazy"
    >

    <br>
    <h1 class="text-white text-center mb-4">Welcome to <span class="party">Party</span>Goers</h1>
    <h4 class="text-white text-center fst-italic">The best way to plan outings with your friends.
    </h4>

    <h1 class="text-white"> Login to Your Account </h1>
    <p class="text-white">Enter your email: <input type='text' placeholder="Email" v-model='email'/> </p>
    <p class="text-white">Enter your password: <input type='password' placeholder="Password" v-model='password'/> </p>
    <p v-if="errMsg"> {{ errMsg }} </p>
    <p> <button @click="signIn" class="btn btn-danger"> Login </button> </p>

</div>

</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const signIn = () => { // we also renamed this method 
  signInWithEmailAndPassword(getAuth(),email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      console.log('Successfully logged in!');
      router.push('/feed') // redirect to the feed
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
        case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break  
        default:
            errMsg.value = 'Email or password was incorrect'
            break
      }
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
