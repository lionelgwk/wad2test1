<template>
    <!--<div class="registeraccount">
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p><button @click="register" class="button">Submit</button></p>
        <p><button @click="signInWithGoogle" class="button google">Sign In With Google</button></p>
    </div>-->

    <div class="container">
        
        <div class ="form">
            <h2>Create An Account</h2>
            <input type="text" class ="box" placeholder="Email" v-model="email"/>
            <input type="password" class ="box" placeholder="Password" v-model="password"/>
            <button @click="register" class="submit">SUBMIT</button>
            <button @click="signInWithGoogle" class="google">SIGN IN WITH GOOGLE</button>
        </div>
        <div class="side">
            <img src="../assets/Register.png">
        </div>

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
/*h1 {
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
    font-size: 2rem;
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