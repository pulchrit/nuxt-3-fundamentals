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
    <!-- If your app uses the same layout on each page, it's ok to define it here.
     Otherwise, you can specify particular layouts in the layouts directory 
    and then render them via the NuxtLayout component-->
    <!-- <nav style="display:flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
    </nav> -->
    <NuxtLayout>
      <!-- this is the children that will be passed to the slot in default.vue -->
      <NuxtPage /> 
    </NuxtLayout>
  </div>
</template>
