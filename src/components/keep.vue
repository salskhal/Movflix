<template>
    <div class="image grid md:grid-cols-2 gap-6 px-16 py-12 lg:px-32">
      <!-- Image side -->
      <div class="relative">
          
        <img :src="imagePath + movieDets.poster_path" alt="" />
        <div
          class="p-5 bg-[#49494a] text-white absolute top-8 left-[-40px] flex flex-col justify-center items-center rounded-lg gap-3"
        >
          <h3 class="font-semibold text-2xl">
            {{ dates[2] }}
          </h3>
          <div class="w-[20px] h-[2px] bg-white"></div>
          <h3>
            <!-- {{ months[movieDets.release_date.split("-")[1] - 1]  }} -->
            {{ months[dates[1] - 1] }}
            {{ dates[0] }}
          </h3>
        </div>
      </div>
      <!-- Details side -->
      <div class="">
        <h1 class="uppercase text-4xl font-semibold text-white">
          {{ movieDets.title }}
        </h1>
        <!--  -->
        <div class="flex gap-3 text-[#868686] flex-col">
          <p v-for="genre in movieDets.genres" :key="genre.id">
            {{ genre.name }}
          </p>
        </div>
        <!--  -->
        <div>
          <h2>The Cast</h2>
          <div class="flex gap-3">
            <p v-for="cast in casts" :key="cast">
              {{ cast }}
            </p>
          </div>
        </div>
        <!--  -->
        <div>
          <StarRate :rate="detsFromIMDB.imdbRating" />
          {{ detsFromIMDB.imdbRating }}
        </div>
        <!--  -->
        <div class="text-white mt-4">
          <h2 class="text-2xl font-medium">Movie OverView</h2>
          <p>{{ movieDets.overview }}</p>
        </div>
        <!--  -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "@vue/reactivity";
  import { computed, onMounted } from "@vue/runtime-core";
  import StarRate from "../components/StarRate.vue";
  
  const loading = ref(false);
  const movieDets = ref({});
  const detsFromIMDB = ref({});
  const casts = ref([]);
  const dates = ref([]);
  
  const imagePath = ref("https://image.tmdb.org/t/p/w500");
  
  const props = defineProps({
    id: String,
  });
  
  // store items split by comma in an array
  const splitByComma = (str) => {
    return str.split(",");
  };
  
  const splitByDash = (str) => {
    return str.split("-");
  };
  
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  const getMovieDetail = async () => {
    loading.value = true;
  
    const getTMDB = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const res = await data.json();
      movieDets.value = res;
      console.log(res.imdb_id);
    };
  
    const getIMDB = async () => {
      const data = await fetch(
        `https://www.omdbapi.com/?i=${movieDets.value.imdb_id}&apikey=93c97367`
      );
      const res = await data.json();
      detsFromIMDB.value = res;
      console.log(res);
    };
  
    await getTMDB();
    await getIMDB();
  
    casts.value = splitByComma(detsFromIMDB.value.Actors);
    dates.value = splitByDash(movieDets.value.release_date);
  
    loading.value = false;
  };
  
  onMounted(() => {
    getMovieDetail();
  });
  // getMovieDetail();
  
  // https://api.themoviedb.org/3/movie/505642?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
  </script>
  
  <style scoped>
  
  .image {
    background: linear-gradient(270deg, #000000 -2.92%, rgba(0, 0, 0, 0) 100%);
    background-color: #1e1e1e;
  }
  
  img{
      width: 100%;
  }
  
  </style>
  