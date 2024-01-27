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
  <!-- <NuxtImg
    src="/mushrooms.jpg"
    sizes="xs:100vw sm:50vw md:50vw lg:3024px"
    densities="x1 x2"
  /> -->

  <!-- using NuxtPicture instead of NuxtImg -->
  <!-- <NuxtPicture
    format="avif,webp"
    src="/mushrooms.jpg"
    sizes="xs:100vw sm:50vw md:50vw lg:3024px"
    densities="x1 x2"
  /> -->

  <!-- using native <picture> and <img> elements for art direction, 
  that is, actually switching to a different image size at different 
  screen sizes -->
  <picture>
    <!-- define media query(ies), when to show this alternate image -->
    <!-- provide the image file(s) to use at various screen sizes based on the media query(ies) -->
    <source
      media="(max-width:640px)"
      srcset="/mushroom.jpg"
    />
    <!-- provide <img> as the fallback or to be used in cases that aren't covered by the media query(ies) -->
    <img src="/mushrooms.jpg" alt="" />
  </picture>
</template>

<style scoped>
  /* img { */
  /* use deep(img) to target img inside of picture */
  :deep(img) {
    display: block;
    max-width: 100%;
  }
</style>