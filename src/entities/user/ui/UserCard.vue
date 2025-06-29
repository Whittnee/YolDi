<script setup lang="ts">
import Avatar from "@/shared/ui/avatar/ui/Avatar.vue";
import Name from "@/shared/ui/name/ui/Name.vue";
import { useAttrs } from "vue";

defineProps<{ name: string; avatarUrl?: string; email: string }>();
const attrs = useAttrs();
</script>

<template>
  <div class="userCard" v-bind="attrs">
    <div>
      <Avatar :name="name" :avatar-url="avatarUrl" size="normal" :hover="false" />
    </div>
    <div class="info">
      <Name :name="name" size="normal" />
      <span class="email">{{ email }}</span>
    </div>
  </div>
</template>

<style scoped>
.userCard {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  gap: 20px;
  width: 100%;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.info > span {
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

@media (width <= 425px) {
  .info {
    flex-direction: column;
    align-items: start;
  }
}
</style>
