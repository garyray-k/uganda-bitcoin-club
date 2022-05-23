<template>
  <div class="donate">
    <h1>Donate</h1>
    <div>
      <h4>LN URL</h4>
      <img
        alt="LNURL QR Code"
        src="../assets/LNURL-uganda-meetup.png"
        class="center-fit"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Donate",
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
.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
</style>
