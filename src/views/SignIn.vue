<template >
    <!--<div class="registeraccount">

        <h1>Sign In</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="signIn" class="button">Submit</button></p>
        <p><button @click="signInWithGoogle" class="button google">Sign In With Google</button></p>
    </div>-->

    <div class="container">
        
        <div class ="form">
            <h2> Sign In</h2>
            <input type="text" class ="box" placeholder="Email" v-model="email"/>
            <input type="password" class ="box" placeholder="Password" v-model="password"/>
            <p v-if="errMsg">{{ errMsg }}</p>
            <button @click="signIn" class="submit">SIGN IN</button>
            <button @click="signInWithGoogle" class="google">SIGN IN WITH GOOGLE</button>
        </div>
        <div class="side">
            <img src="../assets/Login.png">
        </div>

    </div>
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
/*input {
    border-radius: 10px;
    width:300px;
    height:40px
}

h1 {
  margin-top: 60px;
  color: black;
  font-weight: bold;
  font-family: 'Varela Round', sans-serif;
}

.button {
    background-color: crimson;
    color:white;
    font-family: 'Varela Round', sans-serif;
}

.google {
    background-color: rgb(194, 194, 194);
}*/

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

/*Container*/
.container{
    display:flex;
    height:500px;
    width:800px;
    border:1px solid black;
    margin: auto;
    margin-top: 50px;
    margin-bottom:30px;
    box-shadow:15px 15px 15px black;
    border-radius: 10px;
    padding:0px;
}
/*Form*/
.form{
    display:flex;
    flex-direction: column;
    width: 50%;
    align-items:center;
    background-color: whitesmoke;
    border-top-left-radius: 10px;
    border-bottom-left-radius:10px;
}

.form h2{
    font-size: 3rem;
    font-family: 'Varela Round', sans-serif;
    margin: 40px;
}
.box{
    padding: 12px;
    width:65%;
    margin:15px;
    border: 1px solid black;
    outline:none;
    border-radius: 20px;
    height: 40px;
    
    font-size:14px;
    font-family: 'Varela Round', sans-serif;
    justify-content: left;
    background-color: white;
    text-align: left;
}
.submit{
    padding:12px 30px;
    width: 55%;
    margin-top:40px;
    background-color: black;
    color:white;
    border:none;
    outline:none;
    border-radius: 20px;

}

.google{
    padding:12px 30px;
    width: 55%;
    margin-top:10px;
    background-color: black;
    color:white;
    border:none;
    outline:none;
    border-radius: 20px;

}
.submit:hover{
    cursor:pointer;
    background-color:crimson;
}
.google:hover{
    cursor:pointer;
    background-color:crimson;
}

/*Right Side*/
.side{
    display:flex;
    justify-content: center;
    align-items:center;
    width:50%;
    background-color: crimson;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    

}

.side img{
    width:100%;
        
}


</style>