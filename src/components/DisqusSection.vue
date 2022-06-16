<template>
  <section class="comments" aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DisqusSection",
});
</script>
