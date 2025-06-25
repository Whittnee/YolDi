<script setup lang="ts">
import AppFooter from "@/widgets/app-footer/ui/AppFooter.vue";
import AppHeader from "@/widgets/app-header/ui/AppHeader.vue";
import { useUsersStore } from "@/entities/user/model/users";
import { useProfileStore } from "@/entities/user/model/profile";
import { onMounted } from "vue";

const users = useUsersStore();
const profile = useProfileStore();
users.fetchUsers();

onMounted(() => {
  const token = localStorage.getItem("accessToken")
  if (token) {
    profile.fetchProfile()
  }
})

</script>

<template>
  <div class="layout">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
</style>
