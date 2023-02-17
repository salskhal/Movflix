<script setup>
import LandingCaro from "../components/LandingCaro.vue";
import RenderCards from "../components/RenderCards.vue";
import { usePromptStore } from "@/stores/prompt.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "@vue/runtime-core";

let popular = ref([]);
let topRated = ref([]);
let toUse = ref({})
const loading = ref(false);



const getData = async () => {
  loading.value = true;
  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"
    );

    const res = await data.json();
    // let popular.value = first 5 movies
    popular.value = res.results.slice(0, 5);
    toUse.value = popular.value[0];
  

    console.log(popular.value);
  };
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"
    );
    const res = await data.json();
    // let topRated.value = first 5 movies
    topRated.value = res.results.slice(0, 5);


    console.log(topRated.value[3]);
  };
  await getPopular(); 
  await getTopRated();
  loading.value = false;
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="home">
    <LandingCaro :data="toUse" />
    <div class="popular px-10 lg:px-16 pt-24">
      <div class="flex items-center justify-between">
        <h1 class="text-white font-medium text-4xl mb-6">Popular</h1>
        <router-link to="/" class="text-orange-500">View more </router-link>
      </div>
      <RenderCards :data="popular" title="No movie found" />
    </div>
    <div class="popular px-10 lg:px-16 py-24">
      <div class="flex items-center justify-between">
        <h1 class="text-white font-medium text-4xl mb-6">Top Rated</h1>
        <router-link to="/" class="text-orange-500">View more </router-link>
      </div>
      <RenderCards :data="topRated" title="No movie found" />
    </div>
  </div>
</template>

<style scoped>
.popular {
  background-color: #1e1e1e;
  
}
</style>
