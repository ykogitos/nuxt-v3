<template>
  <main>
    <div v-if="post">
      <h1>{{ post?.title }}</h1>
      <p>{{ post?.body }}</p>
    </div>
    <div v-else>Loading</div>
  </main>
</template>

<script setup lang="ts">
  import type { PostInterface } from "~/interfaces";

  const route = useRoute();
  const { data: post } = await useFetch<PostInterface>(
    () => "https://jsonplaceholder.typicode.com/posts/" + route.params.id,
    { lazy: true }
  );

  useSeoMeta({
    title: () => post.value?.title as string,
  });
</script>
