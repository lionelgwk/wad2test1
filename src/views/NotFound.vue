<template>
    <h1>Sorry! The page you are looking for is not found.</h1>
    <h2>The link you have gotten must have been broken.</h2>
    <h2>Click <router-link :to="{ name: 'home'}" class="text-danger">here</router-link> to go back to the home page.</h2>
</template>

<script>
export default {
   name: "NotFound"
};
</script>

<style>
</style>