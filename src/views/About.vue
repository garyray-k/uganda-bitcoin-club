<template>
  <div class="about">
    <h1>About</h1>
    <p>
      Have you heard about Bitcoin recently?
      <br />
      <br />
      Do you want to know how it is different from and superior to the rest of
      the other cryptocurrencies?
      <br />
      <br />
      Already deep in the rabbit hole, enjoying your discovery of this
      revolutionary technology?
      <br />
      <br />
      Whatever level of knowledge or interest you have in Bitcoin, you are
      welcome to join us.
      <br />
      <br />
      Come meet fellow Bitcoiners in Uganda — share, learn, and have fun!
      <br />
      <br />
      See you soon.
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
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

p {
  word-break: break-word;
  overflow-wrap: break-word;
  padding: 20px;
  align-self: center;
  align-content: center;
  max-width: 750px;
  margin: auto;
}
</style>
