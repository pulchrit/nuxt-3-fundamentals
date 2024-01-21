<script setup>

  // use global state for login status from the useState composable
  // const isLoggedIn = useState('isLoggedIn', () => false);
  // or using our custom composable useIsLoggedIn that returns the useState value
  // const isLoggedIn = useIsLoggedIn();

  // example using Pinia instead of custom composable
  const user = useUser();
</script>

<template>
  <nav style="display:flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <!-- use v-if to only show login link when user is not logged in -->
      <!-- pull isLoggedIn status from global state using useState -->
      <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
      <a href="#" v-else @click.prevent="user.isLoggedIn = false">Logout</a>
  </nav>
<!-- slot will render  -->
  <slot></slot>
</template>