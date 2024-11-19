<template>
  <h1>USER POSTS {{ $route.params }} {{ status }}</h1>
  <div v-if="status == 'success' && !posts?.length">No post</div>
  <div v-for="(post, index) in posts" :key="`post-${index}`">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p>{{ formatDate(post.date) }}</p>
  </div>
</template>

<script setup lang="ts">
  import type { IPost } from "~/interfaces";

  const formatDate = (date: Date) => {
    const d = new Date(date);
    return (
      "posted on " +
      d.getDate() +
      "/" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "/" +
      d.getFullYear() +
      " at " +
      String(d.getHours()).padStart(2, "0") +
      ":" +
      String(d.getMinutes()).padStart(2, "0")
    );
  };

  const route = useRoute();
  const {
    status,
    error,
    data: posts,
  } = useFetch<IPost[]>("/api/users/" + route.params.user + "/posts", {
    lazy: true,
    server: true,
  });
</script>
