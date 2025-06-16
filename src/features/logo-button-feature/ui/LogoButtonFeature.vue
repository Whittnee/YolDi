<script setup lang="ts">
import Logo from '@/shared/ui/logo/ui/Logo.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<template>
  <button class="button" type="button" @click="router.push('/')"><Logo/></button>
</template>

<style scoped>

.button {
  background: none;
  display: flex;
}

.button:focus {
  outline: none;
}

</style>