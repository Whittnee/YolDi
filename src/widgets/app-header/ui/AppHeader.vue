<script setup lang="ts">
import LogoButtonFeature from "@/features/logo-button-feature/ui/LogoButtonFeature.vue";
import MyProfileButtonFeature from "@/features/my-profile-button-feature/ui/MyProfileButtonFeature.vue";
</script>

<template>
  <header class="header">
    <nav class="menu">
      <LogoButtonFeature />
      <MyProfileButtonFeature/>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 15px 30px 15px 20px;
  display: flex;
  background-color: var(--accent-color);
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
</style>
