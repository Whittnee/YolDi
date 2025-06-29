<script setup lang="ts">
import { useUsersStore } from "@/entities/user/model/users";
import Preloader from "@/shared/ui/preloader/ui/Preloader.vue";
import Roster from "@/widgets/roster/ui/Roster.vue";
import "primeicons/primeicons.css";
const users = useUsersStore();
</script>

<template>
  <div class="homePage">
    <div v-if="users.isLoading" class="preloader">
      <Preloader />
    </div>
    <Roster v-else />
  </div>
</template>

<style scoped>
.homePage {
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  height: 100%;
}

.preloader {
  align-self: center;
}

@media(width <= 425px) {
  .homePage {
    padding: 25px 0 
  }
}
</style>
