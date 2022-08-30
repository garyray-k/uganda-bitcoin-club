<template>
  <div class="blog">
    <h1>Books</h1>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1mBNNBq8OonE1rMEzVkjLJ_ZeFrqYN1N4/view?usp=sharing"
          >The Simplest Bitcoin Book</a
        >
      </h3>
      <img
        alt="The Simplest Bitcoin Book QR Code"
        src="../assets/SimplestBitcoinBook.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1y_DADO0d5Mfhjhckjb6QlKW9Fv7ZBBrr/view?usp=drivesdk"
          >The Bitcoin Standard</a
        >
      </h3>
      <img
        alt="The Bitcoin Standard QR Code"
        src="../assets/BitcoinStandard.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1yYmpaUVs2Ofg_qUCcg5VKr_aVcXDFB_A/view?usp=drivesdk"
          >The Fiat Standard</a
        >
      </h3>
      <img
        alt="The Fiat Standard QR Code"
        src="../assets/fiatStandard.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1wBLbrAOwdFek4yMYG0m-0OOX5tszJVzs/view?usp=drivesdk"
          >The Bitcoin whitepaper</a
        >
      </h3>
      <img
        alt="The Bitcoin whitepaper QR Code"
        src="../assets/whitepaper.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1z4rgtm7V776WN96jDKTh3nqSTdOzOL63/view?usp=sharing"
          >The Price of Tomorrow</a
        >
      </h3>
      <img
        alt="The Price of Tomorrow QR Code"
        src="../assets/priceOfTomorrrow.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1zFlAqpieE7I3-Llz6QCH7UJV1zweVYC3/view?usp=sharing"
          >21 Lessons</a
        >
      </h3>
      <img
        alt="21 Lessons QR Code"
        src="../assets/21Lessons.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1zE_UkHTkcnrznpjSm-TkpnsAhrYdLHQJ/view?usp=sharing"
          >7th Property</a
        >
      </h3>
      <img
        alt="The 7th Property QR Code"
        src="../assets/7thProperty.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/1zIzkBB2Jr7u0RbrqfJETXvgiIaoEvLzr/view?usp=sharing"
          >The Blocksize War</a
        >
      </h3>
      <img
        alt="The Blocksize War QR Code"
        src="../assets/TheBlocksizeWar.png"
        class="center-fit qr"
      />
    </div>
    <div>
      <h3>
        <a
          href="https://drive.google.com/file/d/11d5yXCiuGGUhaGp_BzGw4St8DveyRZf6/view?usp=sharing"
          >Layered Money</a
        >
      </h3>
      <img
        alt="Layered Money QR Code"
        src="../assets/LayeredMoney.png"
        class="center-fit qr"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Books",
});
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}

.qr {
  max-width: 50vw;
}

img {
  max-width: 187px;
  max-height: 180px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
