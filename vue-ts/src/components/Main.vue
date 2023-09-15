<script setup lang="ts">
import { Repository } from '../query';

defineProps<{ data: Repository | undefined }>()
</script>

<template>
  <h1>Repo: {{ data?.name }}</h1>

  <p className="read-the-docs">
    {{ data?.description }}
  </p>

  <strong>👀 {{ data?.subscribers_count }}</strong>
  <strong>✨ {{ data?.stargazers_count }}</strong>
  <strong>🍴 {{ data?.forks_count }}</strong>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
