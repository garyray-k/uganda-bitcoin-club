<template>
  <div class="donate">
    <h1>Donate</h1>
    <div>
      <div>https://8333.mobi/lemec</div>
      <h4>Lightning Network URL</h4>
      <img alt="LNURL QR Code" src="../assets/jesse.png" class="center-fit" />
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
