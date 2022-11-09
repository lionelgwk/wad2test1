<template>
    <div class="registeraccount">
        <h1>Sign In</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="signIn">Submit</button></p>
        <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    </div>
  </template>
  
  <script setup>
  // @ is an alias to /src
    /* eslint-disable */
    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import router from '@/router'
    const email = ref("");
    const password = ref("");
    const errMsg = ref() //error message

    function signIn() {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully signed in!");
                router.push('/myevents');
            })
            .catch((error) => {
                console.log(error.code);
                switch (error.code){
                    case "auth/invalid-email":
                        errMsg.value = "Invalid email address";
                        break;
                    case "auth/user-not-found":
                        errMsg.value = "User not found";
                        break;
                    case "auth/wrong-password":
                        errMsg.value = "Wrong password";
                        break;
                    default:
                        errMsg.value = "Email or password was incorrect";
                        break;
                }
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

.party {
  margin-top: 60px;
  color: crimson;
  font-weight: bold;
}
</style>