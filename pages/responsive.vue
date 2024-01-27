<!-- example for responsive images using NuxtImage -->
<!-- adjust the size of the image so that users with smaller screens
don't have to download the entire large image -->
<script setup >
  definePageMeta({
    layout: "plain",
  });
</script>

<template>
  <!-- non-responsive image specifies width -->
  <!-- <NuxtImg src="/mushrooms.jpg" width="1860" /> -->

  <!-- use sizes attribute for responsive images -->
  <!-- at xs we want 1005 of viewport width: 100vw, which will be 320px wide on xs screens 
  because 320px is defined by NuxtImage as the default size for xs screens-->
  <!-- sm screens are between 320 and 640px and will show an image 50% of viewport width -->
  <!-- md screens and larger will use the md screen size of 768px and this same image size
  will be used for all larger screens, so we might see some poor image quality at 
  larger screen sizes  -->
  <!-- use densities to ensure retina displays get their needed 2x density!! -->
  <NuxtImg
    src="/mushrooms.jpg"
    sizes="xs:100vw sm:50vw md:50vw lg:3024px"
    densities="x1 x2"
  />
</template>

<style scoped>
  img {
    display: block;
    max-width: 100%;
  }
</style>