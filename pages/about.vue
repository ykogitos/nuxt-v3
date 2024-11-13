<template>
  <h1>About</h1>
  <p>{{ data.hello }}</p>
</template>

<script setup lang="ts">
  const { data: hello } = await useFetch<string>("/api/hello");
</script>
