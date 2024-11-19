<template>
  <h1>USERS {{ status }} {{ $route.params }}</h1>
  <!-- <p v-if="hello && status === 'success'">{{ hello.world }}</p> -->
  <div v-if="error">
    <p>Unexpected error : {{ error }}</p>
    <p>Message : {{ error.message }}</p>
  </div>
  <div v-if="status && !users?.length">No user</div>
  <div v-for="user in users" :key="user.id">
    <nuxtLink
      :to="{ name: 'users-user-edit', params: { user: user.username } }"
    >
      EDIT
    </nuxtLink>
    |
    <nuxtLink
      :to="{ name: 'users-user-posts', params: { user: user.username } }"
    >
      POST
    </nuxtLink>
    <div v-for="(value, key) in user" :key="key">{{ key }} => {{ value }}</div>
  </div>
</template>

<script setup lang="ts">
  import type { IUser } from "~/interfaces";
  const route = useRoute();
  const {
    status,
    error,
    data: users,
  } = useFetch<IUser[]>("/api/users/" + route.params.user, {
    lazy: true,
    server: true,
  });
</script>
