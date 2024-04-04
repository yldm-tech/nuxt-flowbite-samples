<script setup lang="ts">
import nav from "~/components/nav.vue";

const config = useRuntimeConfig();
console.log(config.public.API_BASE_URL); // 访问公开的环境变量
</script>

<template>
  aaa
  <nav></nav>
</template>
