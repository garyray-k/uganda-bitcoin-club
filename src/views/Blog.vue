<template>
  <div class="blog">
    <h1>Blogs</h1>
    <h3>
      <router-link to="/blog/1">Money and Bitcoin, Keys and Coins</router-link>
    </h3>
    <h3>
      <router-link to="/blog/2">Bitcoin: A tool for Social Justice</router-link>
    </h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Blog",
});
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
