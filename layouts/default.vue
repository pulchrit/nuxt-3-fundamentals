<template>
  <nav style="display:flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
  </nav>
<!-- slot will render  -->
  <slot></slot>
</template>