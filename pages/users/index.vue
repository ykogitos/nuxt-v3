<template>
  <h1>USERS {{ status }} {{ $route.params }}</h1>
  <p>ENV: {{ env }}</p>
  <!-- <p v-if="hello && status === 'success'">{{ hello.world }}</p> -->
  <div v-if="error">
    <p>Unexpected error : {{ error }}</p>
    <p>Message : {{ error.message }}</p>
  </div>
  <div v-for="user in users" :key="user.id">
    <strong>
      <nuxtLink :to="{ name: 'users-user', params: { user: user.username } }">
        {{ user.username }}
      </nuxtLink>
    </strong>
    {{ user.email }}
  </div>
</template>

<script setup lang="ts">
  import type { IUser } from "~/interfaces";
  const env = process.env.NODE_ENV;
  const {
    status,
    error,
    data: users,
  } = await useFetch<IUser[]>("/api/users", {
    lazy: true,
    server: true,
    // transform: (users: IUser[]) => {
    //   return users.map((user) => ({
    //     id: user.id,
    //     username: user.username,
    //     email: user.email,
    //   }));
    // },
  });
</script>
