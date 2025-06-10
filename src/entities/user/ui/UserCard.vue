<script setup lang="ts">
import Avatar from "@/shared/ui/avatar/ui/Avatar.vue";
import Name from "@/shared/ui/name/ui/Name.vue";
import { useAttrs } from "vue";

defineProps<{ name: string; avatarUrl?: string; email: string }>();
const attrs = useAttrs()

</script>

<template>
  <div class="userCard" v-bind="attrs">
    <div class="user">
      <Avatar :name="name" :avatar-url="avatarUrl" size="normal" :hover="false" />
      <Name :name="name" size="normal" />
    </div>
    <span class="email">{{ email }}</span>
  </div>
</template>

<style scoped>
.userCard {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.user {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.user > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
}

.email {
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: #838383;
}
</style>
