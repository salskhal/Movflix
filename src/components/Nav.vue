<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";


const genres = ref([]);

const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  const data = await response.json();
  genres.value = data.genres;
};

onMounted(() => {
  getGenres();
});

</script>
<template>
  <!-- <nav class="px-12 lg:px-24 py-[28px] text-white flex justify-between head">
      <div class="logo">
        <h1 class="t text-2xl font-semibold">Movflix</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search movie............."
          class="py-[8px] px-[18px] border-none rounded-3xl bg-[#1D1D1E] text-white"
        />
      </form>
    </nav> -->
  <nav class="head text-white">
    <div
      class="flex flex-col md:flex-row items-center px-6 lg:px-20 justify-between py-2"
    >
      <div class="mb-5 md:mb-0">    
        <a href="/" class="text-lg font-bold  ">Movflix</a>
      </div>
      <div class=" ml-4">
        <form>
          <div class="flex">
            <div class="mr-4">
              <label for="search" class="sr-only">Search</label>
              <input
                type="text"
                id="search"
                name="search"
                class="bg-[#1D1D1E] border-transparent focus:ring-2 outline-none focus:border-transparent rounded-md py-2 px-4 block w-full sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <!-- <div class="mr-4">
              <label for="release-date" class="sr-only">Release Date</label>
              <select
                id="release-date"
                name="release-date"
                class="bg-gray-700 border-transparent focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md py-2 px-4 block w-full sm:text-sm"
              >
                <option value="">Release Date</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div> -->
            <div>
              <label for="genre" class="sr-only">Genre</label>
              <select
                id="genre"
                name="genre"
                class="bg-[#1D1D1E] border-transparent focus:ring-2 focus:border-transparent rounded-md py-2 px-4 block w-full sm:text-sm"
              >
                <option value="">Genre</option>
                <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                  {{ genre.name }}
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.head {
  background: linear-gradient(270deg, #000000 -2.92%, rgba(0, 0, 0, 0) 100%);
  background-color: #1e1e1e;
}
</style>
