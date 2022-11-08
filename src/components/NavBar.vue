<template>
  <nav class="navbar navbar-expand-md bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img width="30" height="24" src="https://cdn-icons-png.flaticon.com/512/1161/1161670.png"> PartyGoers</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-nowrap" aria-current="page">
              <router-link :to="{ name: 'home'}">Home</router-link>
            </a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link text-nowrap">
              <router-link :to="{ name: 'about'}">About</router-link>
            </a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link text-nowrap">
              <router-link :to="{ name: 'myevents'}">My Events</router-link>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link text-nowrap ">
              <router-link :to="{ name: 'createevent'}">Create A Party</router-link>
            </a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link text-nowrap ">
              <button class="btn btn-primary" @click="handleSignOut">Sign Out</button>
            </a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link text-nowrap">
              <router-link :to="{ name: 'registeraccount'}">Register</router-link>
            </a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link text-nowrap ">
              <router-link :to="{ name: 'signin'}">Sign In</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <!-- <router-link :to="{ name: 'home'}">Home</router-link> |
    <router-link :to="{ name: 'about'}">About</router-link>
    <router-link :to="{ name: 'events'}">My Events</router-link> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; 
import router from "@/router";

const isLoggedIn = ref(false);
let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
});

function handleSignOut() {
    signOut(auth)
        .then(() => {
            console.log("Successfully signed out!");
            router.push("/");
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
}
</script>


<style>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
  z-index: 9999;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a .router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none; 
  border-radius: 4px;
}

.create {
  color: white;
  background: green;
}

</style>