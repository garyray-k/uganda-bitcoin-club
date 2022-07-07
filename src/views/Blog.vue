<template>
  <div class="blog">
    <h1>Blogs</h1>
    <ol>
      <li>
        <h3>
          1.
          <router-link to="/blog/1"
            >Money and Bitcoin, Keys and Coins</router-link
          >
        </h3>
      </li>
      <li>
        <h3>
          2.
          <router-link to="/blog/2"
            >Bitcoin: A tool for Social Justice</router-link
          >
        </h3>
      </li>
      <li>
        <h3>
          3.
          <router-link to="/blog/3">Bitcoin – Gold version 2.0</router-link>
        </h3>
      </li>
      <li>
        <h3>
          4.
          <router-link to="/blog/4">The Proof-of-Work train</router-link>
        </h3>
      </li>
      <li>
        <h3>
          5.
          <router-link to="/blog/5"
            >Bitcoin, Climate Change and The Unstoppable Rise of Consumerist
            Culture</router-link
          >
        </h3>
      </li>
      <li>
        <h3>
          6.
          <router-link to="/blog/6"
            >"Bitcoin is Responsibility-Go-Up Technology" - Svetski</router-link
          >
        </h3>
      </li>
      <li>
        <h3>
          7.
          <router-link to="/blog/7"
            >Kings of Bitcoin by Maali Marvin</router-link
          >
        </h3>
      </li>
    </ol>
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
