import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePromptStore = defineStore('prompt', () => {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
   const popular = ref([])
   const topRated = ref([])


    const getPopular =  () => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1')
      .then(res => res.json())
      .then(data => {
        popular.value = data.results
        console.log(popular.value)
      })
    }

  return { popular, topRated, getPopular }
})
