<script setup lang="ts">
import { ref, useAttrs } from "vue";
import "primeicons/primeicons.css";

defineProps<{
  backgroundImage?: string;
  onClick?: () => void;
  hover?: boolean;
}>();

const attrs = useAttrs();
const hovering = ref<boolean>(false);
</script>

<template>
  <section
    class="cover"
    @mouseenter="hover && (hovering = true)"
    @mouseleave="hover && (hovering = false)"
  >
    <div
      class="banner"
      v-if="backgroundImage"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      v-bind="attrs"
    ></div>
    <div :class="['action', hovering && hover && 'active']" :onclick="onClick">
      <template v-if="backgroundImage">
        <i class="pi pi-trash" /><span>Удалить</span>
        <i class="pi pi-image" style="font-size: 19px" />
      </template>
      <template v-else>
        <i class="pi pi-upload" style="font-size: 19px" />
        <span>Загрузить</span>
        <i class="pi pi-image" style="font-size: 19px" />
      </template>
    </div>
  </section>
</template>

<style scoped>
.cover {
  background-color: var(--default-color);
  height: 200px;
  position: relative;
}

.banner {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.action {
  position: absolute;
  background-color: var(--accent-color);
  width: 170px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 0;
  pointer-events: none;
}

.action > span {
  color: var(--main-color);
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
}

.action.active {
  opacity: 1;
  pointer-events: all;
  cursor: pointer;
}
</style>
