<template>
  <div class="home">
    <h1>Uganda Bitcoin Meetup</h1>
    <p>Educating, connecting and collaborating on Bitcoin.</p>
    <img alt="Bitcoin symbol" src="../assets/logo.png" class="center-fit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
<style scoped>
.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
</style>
