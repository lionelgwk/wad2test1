<template>
    <router-link :to="{ name: 'home'}">Home</router-link> |
    <router-link :to="{ name: 'about'}">About</router-link>
</template>

<script>
</script>


<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none; 
  border-radius: 4px;
}
</style>