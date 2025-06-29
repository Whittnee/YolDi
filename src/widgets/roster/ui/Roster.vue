<script setup lang="ts">
import { useUsersStore } from "@/entities/user/model/users";
import UserCardFeature from "@/features/user-card-feature/ui/UserCardFeature.vue";
const users = useUsersStore();
</script>

<template>
  <section class="section">
    <h2 class="h2">Список аккаунтов</h2>
    <ul>
      <li v-for="user in users.users" data-testid="userCard" class="li" :key="user.name">
        <UserCardFeature
          :avatar-url="user.image?.url"
          :name="user.name"
          :email="user.email"
          :slug="user.slug"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 850px;
  width: 100%;
  padding: 0 20px;
}

.h2 {
  font-size: 30px;
  font-weight: 500;
  line-height: 140%;
}

.li {
  padding: 10px 0;
  border-top: 1px solid #e6e6e6;
}

.li:last-child {
  border-bottom: 1px solid #e6e6e6;
}
</style>
