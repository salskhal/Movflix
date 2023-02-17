<template>
  <section class="our-team">
    <div class="grid-container">
      <div class="team-description">
        <h1 class="team-title">Our <span>Team</span></h1>
        
      </div>
      <figure class="team-member">
        <img src="../assets/One-piece.png" alt="" />
        <figcaption>
          <h2 class="name">Team member</h2>
        </figcaption>
      </figure>
      <figure class="team-member">
        <img src="../assets/One-piece.png" alt="" />
        <figcaption>
          <h2 class="name">Team member</h2>
        </figcaption>
      </figure>
      <figure class="team-member">
        <img src="../assets/One-piece.png" alt="" />
        <figcaption>
          <h2 class="name">Team member</h2>
        </figcaption>
      </figure>
      <figure class="team-member">
        <img src="../assets/One-piece.png" alt="" />
        <figcaption>
          <h2 class="name">Team member</h2>
        </figcaption>
      </figure>
      <figure class="team-member">
        <img src="../assets/One-piece.png" alt="" />
        <figcaption>
          <h2 class="name">Team member</h2>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const imagePath = ref("https://image.tmdb.org/t/p/w500");

defineProps({
  data: Object,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400i,900");

/* variables */

/* 
$dark-blue: #0b2027;
$blue: #40798c;
$accent: #70a9a1;
$light-accent: #70a9a1;
$yellow: #f6f1d1;
$white: #f8f8f8;

$ff: "Raleway", sans-serif;
$fw-l: 300;
$fw-n: 400;
$fw-b: 900; */

/* Styles */

/* *, *::before, *::after { box-sizing: border-box; } */

body {
  font-weight: 400;
  line-height: 1.6;
  font-family: "Raleway", sans-serif;
}

.grid-container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
}
@media (min-width: 52em) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  }
}

.our-team {
    background: linear-gradient(270deg, #000000 -2.92%, rgba(0, 0, 0, 0) 100%);
  background-color: #1e1e1e;
  padding: 5em 0;
  color: rgba(#f8f8f8, 0.6);
}

.team-description {
  grid-column: span 2;
}
@media (min-width: 52em) {
  .team-description {
    grid-column: auto;
    grid-row: span 2;
    align-self: center;
  }
}

.team-title {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 5rem;
  color: #f8f8f8;
  margin-top: 0;
  line-height: 1;
}

.team-member {
  margin: 0;
  padding: 0;
  position: relative;
}
.team-member figcaption {
  position: absolute;
  top: 1em;
  bottom: 1em;
  right: 1em;
  left: 1em;
  background: rgba(#70a9a1, 0.8);
  color: #0b2027;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ease-in-out 300ms;
}

.team-member:hover figcaption {
  opacity: 1;
}
.team-member span {
  display: block;
  font-weight: 900;
}

.team-member img {
  width: 100%;
  display: block;
}
.name {
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
}
</style>
