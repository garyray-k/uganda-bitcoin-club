<template>
  <div class="home">
    <h1>Uganda Bitcoin Meetup</h1>
    <p>Educating, connecting and collaborating on Bitcoin.</p>
    <p>Click the coin to learn when and where.</p>
    <Transition>
      <img
        alt="Bitcoin symbol"
        src="../assets/logo.png"
        class="center-fit"
        v-if="image"
        transition="fade"
        @click="image = false"
      />
      <div v-else class="center-fit">
        <h2>Time and Location</h2>
        <p>Time 3pm to 6pm @ The Patio Cafe and Restaurant, Ntinda</p>
        <h2>Dates</h2>
        <p>24th September</p>
        <p>29th October</p>
        <p>26th November</p>
        <h2>Contact</h2>
        <p>Jeph +256782539943</p>
        <p>Jesse- +256750476523</p>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const image = ref(true);

    return {
      image,
    };
  },
});
</script>
<style scoped>
.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
