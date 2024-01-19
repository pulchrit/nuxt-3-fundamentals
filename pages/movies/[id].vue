<script lang="ts" setup>
  const route = useRoute()
  const config = useRuntimeConfig();

  const { data } = await useFetch('http://www.omdbapi.com/', {
    query: {
      apikey: config.public.apiKey,
      i: route.params.id,
    }
  });
</script>

<template>
  <h2>Here's your movie info for: {{ data.Title }}</h2>
  <pre>{{  data }}</pre>
</template>

<style scoped></style>