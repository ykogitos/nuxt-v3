<script setup lang="ts">
  const config = useAppConfig();
  useSeoMeta({
    title: config.title,
  });
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <TheHeader />
    <NuxtPage />
  </div>
</template>
