<template>
  <div class="blog1">
    <h5 class="back">
      <router-link to="/blog">Back</router-link>
    </h5>
    <h1>Monetary Theory on Steroids by Maali Marvin</h1>
    <p>
      Satoshi Nakamoto will be remembered as the greatest economist who ever
      lived.
    </p>
    <p>
      A software developer, scientist, game theorist, mathematician,
      philosopher.
    </p>
    <p>The Magna Economist.</p>
    <p>
      Especially with regard to the impact of his creation, Bitcoin, on Monetary
      Theory.
    </p>
    <p>Monetary Theory deals with how to manage money in an economy.</p>
    <p>
      Unlike Keynesian Theory that advocates for spurring economic growth by
      making more people money hungry through widening the gap between the rich
      and the poor, through printing of risk free credit and giving it to the
      rich, monetary theory has an alternative idea.
    </p>
    <p>It advocates for controlling the money supply through taxation.</p>
    <p>
      If the economy is not picking up speed, then taxes should be reduced so
      that people use the excess cash to spend on goods in the market. And vice
      versa. This can be captured in the all famous Laffer curve.
    </p>
    <p>
      Now Bitcoin seems to be against taxation but it is only because the
      current economic systems are flawed. Foolish.
    </p>
    <p>
      Taxes, if used well, serve better than Charitable giving. Because they
      remind everybody to care for the whole. And I am yet to see people hate
      Charitable giving.
    </p>
    <p>
      What Bitcoin does is it advocates for Monetary Theory while fighting
      Keynesian theory. So in one fell stroke, Satoshi Nakamoto made Monetary
      Theory way more powerful than before.
    </p>
    <p>
      Bitcoin fights Keynesian theory because if people increasingly use a
      different form of money to store economic value, then printed fiat money
      will not strike their fancy as much and nobody will sell their assets to
      the rich (who just got some free cash) for fiat dollars.
    </p>
    <p>
      So the idea of the rich getting unfairly richer because they have friends
      in The House will fall out of favour more and more and eventually, the
      growing gap between the haves and have nots will no longer be allowed to
      grow.
    </p>
    <p>
      When this happens, then economics will finally peg to sound scientific
      principles such as "when resources needed to live a quality life get
      cheaper on aggregate, it will be good for everybody".
    </p>
    <p>
      Today, under Keynesianism, a cheaper but good house is impossible. A good
      house must be more and more expensive.
    </p>
    <p>Because we are all like street children,</p>
    <p>
      wishing to live in the big beautiful house, with a big beautiful family
    </p>
    <p>but in vain.</p>
    <p>Our desire is tapped for economic gain.</p>
    <p>By making us rave with desire</p>
    <p>Run up and down</p>
    <p>Fly our cars, Fight our brother, Beat our Sister</p>
    <p>CRASH, we kill one another.</p>
    <p>All in pursuit of dollars.</p>
    <p>Oh, who knew that</p>
    <p>the pain</p>
    <p>Of longing for what we cannot attain</p>
    <p>can be tapped, like oil</p>
    <p>Will be tapped, our toil</p>
    <p>Will be stolen.</p>
    <p>To enrich those who already have more than they know</p>
    <p>To enrich those who, like us, fear the bottom</p>
    <p>Fear the blossom of Mother Nature</p>
    <p>For the ground can</p>
    <p>No longer</p>
    <p>Support anybody of its own accord</p>
    <p>
      Unless they are part of the Great Big Economic Machine. A failing machine
    </p>
    <p>Barely holding it together</p>
  </div>
  <div class="blog1">
    <DisqusSection />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DisqusSection from "../../components/DisqusSection.vue";

export default defineComponent({
  name: "Blog10",
  components: {
    DisqusSection,
  },
});
</script>
<style scoped>
.blog1 {
  padding: 20px;
  align-self: center;
  align-content: center;
  max-width: 680px;
  margin: auto;
  background-color: #fafafa;
}

.back {
  text-align: left;
  position: fixed;
  top: 0;
  width: fit-content;
  z-index: 100;
  background-color: #fafafa;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: disc;
  padding: 0;
  margin: auto;
  max-width: fit-content;
}

li {
  margin: 10px 10px;
  text-align: left;
}

a {
  color: #42b983;
}

p {
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
