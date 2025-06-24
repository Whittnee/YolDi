<script setup lang="ts">
import { useProfileStore } from "@/entities/user/model/profile";
import Avatar from "@/shared/ui/avatar/ui/Avatar.vue";
import Button from "@/shared/ui/button/ui/Button.vue";
import Name from "@/shared/ui/name/ui/Name.vue";
import { useRouter } from "vue-router";

const profile = useProfileStore();
const router = useRouter();
</script>

<template>
  <div
    v-if="profile.user !== null"
    class="myProfileFeature"
    @click="router.push(`/profile/${profile.user.slug}`)"
  >
    <Name :name="profile.user.name" size="small" />
    <Avatar
      :avatar-url="profile.user.image?.url"
      :name="profile.user.name"
      size="normal"
    />
  </div>
  <Button
    v-else
    type="button"
    style="height: 40px; width: 114px; border: 1px solid var(--border-color)"
    label="Войти"
    @click="router.push('/signin')"
    color="white"
  />
</template>

<style scoped>
.myProfileFeature {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  cursor: pointer;
}
</style>
