<template>
  <div class="hello">
    <h3>Slide Shows</h3>
    <ul>
      <li>
        <a
          href="https://docs.google.com/presentation/d/1pZdj4dmijSixUiiCpAEtbRmqE2D9pAsBljqE9rJQV2w/edit?usp=sharing"
          target="_blank"
          class="ml-md-auto"
          >Shenandoah Bitcoin Club Slides (1st Meeting)</a
        >
      </li>
    </ul>
    <h3>Resources</h3>
    <ul>
      <li>
        <a href="https://bitcoiner.guide/" target="_blank" class="ml-md-auto"
          >Bitcoiner.Guide</a
        >
      </li>
      <li>
        <a
          href="https://bitcoinforlocalbusiness.com/"
          target="_blank"
          class="ml-md-auto"
          >Bitcoin for Local Business</a
        >
      </li>
      <li>
        <a
          href="https://bitcoinmagazine.com/"
          target="_blank"
          class="ml-md-auto"
          >Bitcoin Magazine</a
        >
      </li>
      <li>
        <a href="https://github.com/bitcoin" target="_blank" class="ml-md-auto"
          >Bitcoin Github (Code)</a
        ><br />
      </li>
      <li>
        <a href="http://b.tc/21days" target="_blank" class="ml-md-auto"
          >21 Days to Learn Bitcoin (A daily email for 21 days)</a
        ><br />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResourcesList",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
