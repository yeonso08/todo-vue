<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link>
    <div> <router-link to="/login">Login</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<style>
body {
  background-color: beige
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>