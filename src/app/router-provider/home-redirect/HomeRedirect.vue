<script setup lang="ts">
import { useProfileStore } from "@/entities/user/model/profile";
import { watch } from "vue";
import { useRouter } from "vue-router";

const profile = useProfileStore();
const router = useRouter();

watch(
  () => profile.isAuth,
  (isAuth) => {
    if (isAuth) {
      router.replace(`/profile/${profile.user?.slug}`);
    }
  },
  { immediate: true }
);
</script>

<template>
  <RouterView />
</template>
