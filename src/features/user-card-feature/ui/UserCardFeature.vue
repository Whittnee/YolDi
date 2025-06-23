<script setup lang="ts">
import UserCard from "@/entities/user/ui/UserCard.vue";
import { useRouter } from "vue-router";

defineProps<{
  name: string;
  avatarUrl?: string;
  email: string;
  slug: string;
}>();

const router = useRouter();
</script>

<template>
  <UserCard
    style="cursor: pointer"
    :name="name"
    :avatar-url="avatarUrl"
    :email="email"
    @click="router.push(`/profile/${slug}`)"


  />
</template>
