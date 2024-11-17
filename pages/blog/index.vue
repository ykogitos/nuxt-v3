<template>
  <h1>Blog - Posts</h1>
  <article v-for="(post, index) in posts" :key="`post-${post.id}`">
    <h2>{{ index + 1 < 10 ? "0" + (index + 1) : index }} - {{ post.title }}</h2>
    <p>
      {{ post.body.slice(0, 100) }}&hellip;<br />
      <nuxt-link :to="`/blog/${post.id}`">Find out more</nuxt-link>
    </p>
  </article>
  <!-- <pre>{{ posts }}</pre> -->
</template>

<script setup lang="ts">
  import type { PostInterface } from "~/interfaces";
  const { data: posts } = await useFetch<PostInterface[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=15",
    {
      lazy: true,
      server: true,
    }
  );
</script>
