<template>
    <div class="registeraccount">
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p><button @click="register">Submit</button></p>
        <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    </div>
  </template>
  
  <script setup>
  // @ is an alias to /src
    /* eslint-disable */
    import { ref } from "vue";
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import router from '@/router'
    const email = ref("");
    const password = ref("");

    function register() {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully registered!");
                router.push('/myevents');
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            });
    }

//   const signInWithGoogle = () => {
    
// }
  
//   export default {
//     name: 'RegisterAccount',
//     components: {
//   }
//   }
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