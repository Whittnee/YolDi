<script setup lang="ts">
import { useProfileStore } from "@/entities/user/model/profile";
import "primeicons/primeicons.css";
import Button from "@/shared/ui/button/ui/Button.vue";
const profile = useProfileStore();
</script>

<template>
  <div class="logout">
    <Button
      style="height: 40px; border: 1px solid var(--border-color)"
      type="button"
      label="Выйти"
      @click="profile.logout"
      color="white"
    >
      <i class="pi pi-sign-out" />
    </Button>
  </div>
</template>

<style scoped>
.logout {
  margin-top: 60px;
  max-width: 130px;
  width: 100%;
}
</style>
