
<script setup>
// his page will use the plain layout rather than default layout
  definePageMeta({
    layout: "plain",
  })
</script>
<template>
  <form>
    <h1>Login</h1>
    <label for="#username">Username:</label>
    <input id="username" type="text" />
    <label for="#password">Password:</label>
    <input id="password" type="password" />
  </form>
</template>