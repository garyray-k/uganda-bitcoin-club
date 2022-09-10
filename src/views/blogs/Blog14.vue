<template>
  <div class="blog1">
    <h5 class="back">
      <router-link to="/blog">Back</router-link>
    </h5>
    <h1 style="text-align: center">
      The Mathematics of Bitcoin – A Tale of Ants and Difficulty Adjustment
    </h1>
    <p>
      Being a science buff of sorts, I could not put off writing a technical
      piece on Bitcoin forever.
    </p>
    <p>
      Bitcoin is heavy on mathematics and I know a little bit of mathematics so,
      here goes based on what I understand from difficulty adjustment so far.
    </p>
    <p style="text-align: center">* * *</p>
    <p>Once upon a time…</p>
    <p>Assume (the proper way to formally begin a mathematical idea);</p>
    <p>1) We are in an alternate reality in which Ants are the apex species.</p>
    <p>
      2) The ants invent Bitcoin, and just like us, there are few Bitcoin miners
      at the beginning.
    </p>
    <p>
      3) However, these ants invent Bitcoin as a mental exercise of sorts. Not
      with digital computers. They have “mental computers”. They are mentats!
    </p>
    <p>
      4) A Bitcoin hash is initially decided by their Bitcoin proof-of-work
      system to be only 10 alphanumerical characters long while beginning with 9
      zeros.
    </p>
    <p>
      Now assume again this (below) is our Bitcoin hash for which an Ant-miner
      will be rewarded some Bitcoin;
    </p>
    <p>000000000z</p>
    <p>
      Assume (last assumption. Number 5) that our ants can only count starting
      from 0 to 9 and then move on to letters by only saying letters from a to
      z. In other words, their mental computer memories are 1 letter or 1 number
      at a time but not both.
    </p>
    <p>
      We know that there are only 22 letters of the alphabet (a b c d e f g h i
      j k l m n o p q r s t u v w x y z) so we know that an ant will count (also
      called “mining for Bitcoin”) by going;
    </p>
    <p>‘0000000000’ – This will uses 1 joule of the ant’s energy.</p>
    <p>0000000001 – Uses another 1 joule of energy.</p>
    <p>…</p>
    <p>000000000a – Uses another 1 joule of energy.</p>
    <p>000000000b – Uses another 1 joule of energy.</p>
    <p>000000000c – Uses another 1 joule of energy.</p>
    <p>….</p>
    <p>000000000z – Uses another 1 joule of energy</p>
    <p>
      Total energy used (the difficulty of the system) = 32 joules/difficulty
      points (22 letters plus 10 digit-numbers). Our Satoshi Nakamoto ant is
      damned tired.
    </p>
    <p>That was a nice day’s work.</p>
    <p>It was only competing with one other ant. Call it Faketoshi ant.</p>
    <p>Well, nice race.</p>
    <br />
    <p style="text-align: center">* * *</p>
    <p>
      Only 13 days later, like ants drawn to nutritious sugar, meat and
      vegetables, 10 other ants (warrior ants!) with tough muscles that can
      easily beat a difficulty of 100, have joined the party.
    </p>
    <p>
      But the Satoshi Nakamato ant (now retired) had designed a very good
      proof-of-work system so the system readjusts the difficulty. It now wants
      up to 8 zeros with the last alphanumeric characters as, you guessed it,
      zz.
    </p>
    <p>
      Note on how it gives incentivising rewards: Total prize is fixed and will
      only be shared out as per percentage level of difficulty completed,
      divided by all participants.
    </p>
    <p>(Nitty gritty Ant-Bitcoin Details)</p>
    <p>
      Bottom line: The system only gives away 1 BTC every 10 minutes. Like on
      our Earth.
    </p>
    <br />
    <p>So, what is the new difficulty?</p>
    <p>Target : 00000000zz</p>
    <p>Start at: 0000000000</p>
    <p>…</p>
    <p>End at : 00000000zz</p>
    <p>Total permutations = 32 times 32 = 704 times</p>
    <p>
      Well, none of the Level 100 difficulty-certified guys can do it that’s for
      sure. But, if they can find a way to do it in series (Ant-version of
      “parallel brute force”), they’d win!
    </p>
    <p>
      You know, if some of them could out in their 100 joules of work, then take
      a mental break from counting and let the others start from there and
      continue, it just might work.
    </p>
    <p>Only 8 guys need do, right?</p>
    <p>Right.</p>
    <p>
      Alas, no 8 warrior ants (who are the most cooperative) want to collaborate
      on this idea of their own accord. Too risky to loss of personal wealth
      i.e. counting strength, time, name, food energy eaten, name it.
    </p>
    <p>
      Enter the billionaire Queen. With the money (food) to finance big mining
      servers (lots of servant ants), they definitely mine the big Bitcoin.
    </p>
    <p>
      Of course, everybody else gets a share, as per the fair judgement of the
      systems rewarding mechanism. But, as it was in the beginning, only those
      who put in the work get the prize.
    </p>
    <p>
      Inflation, copying, hacking is not allowed as per the unique
      Ant-Bitcoin-Mind-DNA.
    </p>
    <p>It is impossible.</p>
    <p>-----------------</p>
    <p>
      Slowly, their ability to calculate really huge numbers, really fast, grows
      exponentially as the ants evolve.
    </p>
    <p>
      They soon become gods. And they still compete to proof the work of their
      Ant Bitcoin. And yes, they can’t believe they made it this far on counting
      damned hashes.
    </p>
    <p>
      One day, they make Ant-movies on big, soft and really smart creatures
      bipedal that rely on machines to do their counting for them.
    </p>
  </div>
  <div class="blog1">
    <DisqusSection />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DisqusSection from "../../components/DisqusSection.vue";

export default defineComponent({
  name: "Blog14",
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
  text-align: left;
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
