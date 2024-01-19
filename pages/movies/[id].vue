<script lang="ts" setup>
  const route = useRoute()
</script>

<template>
  <h1>{{ $route.params.id }}</h1>
  <h2>{{ route.params.id }}</h2>
</template>

<style scoped></style>