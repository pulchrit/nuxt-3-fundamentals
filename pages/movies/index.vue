
<script setup>
  
  definePageMeta({
    // One way to add route middleware for only this page!!
    // you could also use the middleware folder for more global middleware!!
    // using nuxi cli: npx nuxi add middleware [enter middleware filename]
    // the middlware runs on the server and client
    // middleware(to, from) { // use this function to add your own for this page
    //   // to = route navigate to
    //   // from = route navigated from 
    //   console.log(to, from);
    // },
    
    // use the middleware prop to tell Nuxt which middleware from the middleware
    // folder you want to fun for this page
    middleware: ["logger"],
  })
</script>

<template>
  <MovieSearch />
</template>
