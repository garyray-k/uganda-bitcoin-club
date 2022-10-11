<template>
  <div class="photos">
    <h1>Photos</h1>
    <div class="row justify-content">
      <h3>October 2022</h3>
      <button @click="showHideOctober2022">{{ october2022label }}</button>
    </div>
    <div v-if="october2022">
      <img
        alt="Bitcoiners posing for a picture."
        src="../assets/meetup1.jpeg"
        class="center-fit"
      />
      <img
        alt="Bitcoiners posing for a picture."
        src="../assets/meetup2.jpeg"
        class="center-fit"
      />
      <img
        alt="Bitcoiners posing for a picture."
        src="../assets/meetup3.jpeg"
        class="center-fit"
      />
      <div>
        <button @click="showHideOctober2022">{{ october2022label }}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Photos",
  setup() {
    const october2022 = ref(false);
    const october2022label = ref("Show");
    function showHideOctober2022() {
      october2022label.value = october2022.value ? "Show" : "Hide";
      october2022.value = !october2022.value;
    }

    return {
      october2022,
      october2022label,
      showHideOctober2022,
    };
  },
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
