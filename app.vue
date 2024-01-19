<script setup>
  useHead({
    // use this to define a static title that will be overwritten 
    // by individual pages
    // title: "My movies", 
    // titleTemplate allows you to combine the site's title with individual page
    // titles that also useHead
    // titleChunk comes from the individual pages useHead title prop
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - My movies` : `My movies`;
    }
  })
</script>
<template>
  <div>
    <nav style="display:flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
