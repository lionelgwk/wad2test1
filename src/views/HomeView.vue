<template>
  <div
      class="page-header min-vh-100"
      loading="lazy"
    >

    <br>
    <h1 class="text text-center mb-4">Welcome to <span class="party">Party</span>Goers</h1>
    <h4 class="text-center fst-italic">The best way to plan outings with your friends.
    </h4>

    <h1 class="text"> Login to Your Account </h1>
    <p class="text">Enter your email: <input type='text' placeholder="Email" v-model='email'/> </p>
    <p class="text">Enter your password: <input type='password' placeholder="Password" v-model='password'/> </p>
    <p v-if="errMsg"> {{ errMsg }} </p>
    <p> <button @click="signIn" class="btn btn-danger"> Login </button> </p>
    <div>
      <img src="@/assets/pic6.jpg">
    </div>

    

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
