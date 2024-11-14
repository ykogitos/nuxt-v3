<template>
  <h1>About</h1>
  <p v-if="hello && status === 'success'">{{ hello.world }}</p>
</template>

<script setup lang="ts">
  const { status, data: hello } = await useFetch<{ world: string } | null>(
    "/api/hello",
    { lazy: true }
  );
</script>
