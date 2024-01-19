<script setup>

const query = ref('');
const movies = ref([]);
const config = useRuntimeConfig();

async function search() {
  // you can use $fetch directly or use the useFetch composable
  // const { Search } = await $fetch(`http://www.omdbapi.com/?apikey=${config.public.apiKey}&s=${query.value}`);
  const { data } = await useFetch('http://www.omdbapi.com/', {
    query: {
      apikey: config.public.apiKey,
      s: query.value,
    }
  });
  console.log('data', data.value);
  movies.value = data.value.Search;
}
</script>

<template>
  <div>
    <!--  @submit is shorthand syntax, prevent calls preventDefault 
    so we can override standard browser behavior -->
    <form @submit.prevent="search">
      <label for="#search">Search for a movie:</label>
      <input id="search" type="text" v-model="query">
      <button>Search</button>
    </form>
    <ul class="movie-list">
      <li v-for="movie in movies" :key="movie.imbdID">
        <!--  instead of passing a long string /moveis/..., you can 
          pass an object with the name and params of the route  -->
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
  }
</style>
