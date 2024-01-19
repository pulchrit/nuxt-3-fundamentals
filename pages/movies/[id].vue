<script setup>
  const route = useRoute()
  const config = useRuntimeConfig();

  // The error from useFetch will be a 500 server error!
  const { data, error } = await useFetch(
    // 'http://www.omdbapi.com/', {
    'https://httpbin.org/status/500', { // mock a 500 error
    query: {
      apikey: config.public.apiKey,
      i: route.params.id,
    }, 
    key: `/movies/${route.params.id}`, // add key to ensure data udpates when params.id changes

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
    pick: ["Plot", "Title", "Error"],
  });
  
  // handle mocked 500 level server errors from useFetch using httpbin.org
  if (error.value) {
    showError({ statusCode: 500, statusMessage: "ohhh nooo" })
  }
  // check for Error prop from the api response!!!
  if (data.value.Error === 'Incorrect IMDb ID.') {
    // showError is a built-in that automatically renders Nuxt's Error component
    // you pass in a code and message.
    showError({ statusCode: 404, statusMessage: "Movie not found" });
  }
</script>

<template>
  <h2>Here's your movie info for: {{ data.Title }}</h2>
  <pre>{{  data }}</pre>
</template>

<style scoped></style>