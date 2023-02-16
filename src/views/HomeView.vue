<script setup>
import LandingCaro from "../components/LandingCaro.vue";
</script>

<template>
  <div class="home">
    <LandingCaro />
    <div class="popular pt-24">
      <h1 class="text-white font-medium text-4xl">Popular</h1>
      <div class="parent2">
        <div class="div6">
          <img src="../assets/spy_carousel.png" alt="">
        </div>
        <div class="div7"><img src="../assets/spy_carousel.png" alt=""></div>
        <div class="div8"><img src="../assets/spy_carousel.png" alt=""></div>
        <div class="div9"><img src="../assets/spy_carousel.png" alt=""></div>
        <div class="div10"><img src="../assets/spy_carousel.png" alt=""></div>
      </div>
    </div>
    <div class="popular pt-24">
      <h1 class="text-white font-medium text-4xl">Top Rated</h1>
      <div class="parent">
        <div class="div1"><img src="../assets/spy_carousel.png  " alt=""></div>
        <div class="div2"><img src="../assets/spy_carousel.png  " alt=""></div>
        <div class="div3"><img src="../assets/spy_carousel.png  " alt=""></div>
        <div class="div4">1</div>
        <div class="div5">1</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popular {
  background-color: #1e1e1e;
  /* height: 100vh; */
  padding-inline: 104px;
}
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
/* grid-column-gap: 0px;
grid-row-gap: 0px; */
gap: 20px;
height: 100vh;

}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.div1 { grid-area: 1 / 1 / 3 / 3; }
.div2 { grid-area: 1 / 3 / 3 / 4; }
.div3 { grid-area: 3 / 1 / 5 / 2; }
.div4 { grid-area: 3 / 2 / 5 / 3; }
.div5 { grid-area: 3 / 3 / 5 / 4; }

.parent2 {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
/* grid-column-gap: 0px;
grid-row-gap: 0px; */
gap: 20px;
height: 100vh;
}

.div6 { grid-area: 1 / 2 / 3 / 4; }
.div7 { grid-area: 1 / 1 / 3 / 2; }
.div8 { grid-area: 3 / 1 / 5 / 2; }
.div9 { grid-area: 3 / 2 / 5 / 3; }
.div10 { grid-area: 3 / 3 / 5 / 4; }
</style>
