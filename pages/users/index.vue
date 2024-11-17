@server-side

<template>
  <h1>USERS {{ status }}</h1>
  <!-- <p v-if="hello && status === 'success'">{{ hello.world }}</p> -->
  <div v-for="user in users" :key="user.id">
    <strong> {{ user.username }}</strong>
    {{ user.email }}
  </div>
</template>

<script setup lang="ts">
  import type { IUsers } from "~/interfaces";
  const { status, data: users } = await useFetch<IUsers[]>("/api/hello", {
    lazy: true,
    server: true,
  });

  // const { data: users } = await useFetch<IUsers[]>("/api/hello");
</script>
