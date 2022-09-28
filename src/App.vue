<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/photos">Photos</router-link> |
    <router-link to="/resources">Resources</router-link> |
    <router-link to="/donate">Donate</router-link> |
    <router-link to="/books">Books</router-link> |
    <router-link to="/blog">Blogs</router-link> |
    <router-link to="/memeducation">Memeducation</router-link> |
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
