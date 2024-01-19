<script setup>
  const route = useRoute()
  const config = useRuntimeConfig();

  const { data } = await useFetch('http://www.omdbapi.com/', {
    key: `/movies/${route.params.id}`, // add key to ensure data udpates when params.id changes
    query: {
      apikey: config.public.apiKey,
      i: route.params.id,
    }, 
    // transform is a callback that allows you to tranform the data before returning it!
    // transform(data) {
    //   // example just return title
    //   // return data.title;
    //   // example return only plot and title as new object
    //   return {
    //     Plot: data.Plot,
    //     Title: data.Title,
    //   }
    // },
    
    // NUXT provides a shorthand for just returning a part of the data, pick
    // specify the keys of the props you want from the data
    // IT IS highly recommended that you only pull the data properties you need 
    // for a given page via pick or transform
    pick: ["Plot", "Title"],
  });
</script>

<template>
  <h2>Here's your movie info for: {{ data.Title }}</h2>
  <pre>{{  data }}</pre>
</template>

<style scoped></style>