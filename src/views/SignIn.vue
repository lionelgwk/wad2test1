<template>
  <header class="header-2">
    <div class="page-header min-vh-100" loading="lazy">
      <div class="container" data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <div class="center">
            <h2>Login</h2><br>
            <p><input type="text" placeholder="Email" v-model="email"/></p>
            <p><input type="password" placeholder="Password" v-model="password"/></p>
            <p v-if="errMsg">{{ errMsg }}</p>
            <p><button @click="signIn" class="button">Let's Party!</button></p>
            <p>OR</p> 
            <p><button @click="signInWithGoogle" class="button google">Login with Google</button></p>
            <router-link :to="{ name: 'registeraccount'}" class="text-danger">Don't have an account?</router-link>
        </div>
        
  </div>
    </div>
  </header>
  </template>
  
  <script setup>
  // @ is an alias to /src
    /* eslint-disable */
    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import router from '@/router'
    const email = ref("");
    const password = ref("");
    const errMsg = ref() //error message

    function signIn() {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully signed in!");
                router.push('/homelogin');
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
input {
    border-radius: 10px;
    width:300px;
    height:40px;
    border: none;
    font-size:20px;
    text-align: center;
    font-family: 'Varela Round', sans-serif;
    background-color: rgb(210, 210, 210);

}

h2 {
  color: black;
  font-weight: bold;
  font-family: 'Varela Round', sans-serif;
  text-decoration: underline;
}

.button {
    background-color: crimson;
    color:white;
    font-family: 'Varela Round', sans-serif;
    border: none;
    padding:5px 10px 5px 10px;
    font-size: 15px;
    margin-bottom:0px
}

.google {
    background-color: grey;
}

.page-header{
    background-image: url('@/assets/loginpage.png');
    background-size: cover;
    margin: auto;
    height: 60vh;
    width: 100%;
    font-family: 'Varela Round', sans-serif;
  }

.container {
    top: 50%;
    position: relative;
}

a {
    color:crimson
}

.center {
    background-color: white;
    width:fit-content;
    height:fit-content;
    border-radius: 10px;
    padding:20px;
    position: absolute;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-shadow: 5px 5px #D3D3D3;
}

input:hover{
  box-shadow: 0 0 5pt 0.5pt #D3D3D3;
}
input:focus {
  box-shadow: 0 0 5pt 2pt #D3D3D3;
  outline-width: 0px;
}

button:hover {
    box-shadow: 0 0 5pt 2pt #D3D3D3;
}
</style>