<template>
    <div class="registeraccount">
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p><button @click="register" class="button">Submit</button></p>
        <p><button @click="signInWithGoogle" class="button google">Sign In With Google</button></p>
    </div>
  </template>
  
  <script setup>
  // @ is an alias to /src
    /* eslint-disable */
    import { ref } from "vue";
    import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/myevents");
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
}
  
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

input {
    border-radius: 10px;
    width:300px;
    height:40px
}
.button {
    background-color: crimson;
    color:white;
    font-family: 'Varela Round', sans-serif;
}

.google {
    background-color: rgb(194, 194, 194);
}
</style>