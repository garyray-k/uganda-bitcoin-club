<template>
  <div class="resources">
    <h1>Resources</h1>
    <p>
      <a href="https://youtu.be/ZKwqNgG-Sv4" target="_blank"
        >The Trust Machine (how & why Bitcoin works)</a
      >
      -- video
    </p>
    <p>
      <a href="https://link.medium.com/FLlSqb5jxqb"
        >Explain Bitcoin Like I’m Five</a
      >
      -- article
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Resources",
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
