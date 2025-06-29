<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{ name: string; avatarUrl?: string; size: 'normal' | 'big', hover?: boolean }>();
const letter = computed(() => props.name.charAt(0).toUpperCase());

const hovering = ref<boolean>(false)

</script>

<template>
  <div :class="['avatar', size]" @mouseenter="hover && (hovering = true)" @mouseleave="hover && (hovering = false)">
    <img v-if="avatarUrl" class="image" :src="props.avatarUrl" loading="lazy"></img>
    <span :class="['letter', size]" class="letter" v-if="name &&!props.avatarUrl && !hovering">{{ letter }}</span>
    <div :class="['camera', hovering && hover && 'active']"></div>
  </div>
</template>

<style scoped>

.avatar {
  display: flex;
  background-color: var(--default-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border: 1px solid #E6E6E6;

}

.avatar.big {
  width: 100px;
  height: 100px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.camera {
  width: 100%;
  height: 100%;
  background: url(/public/camera-solid.svg) center center;
  background-size: 70%;
  background-color: var(--main-color);
  background-repeat: no-repeat;
  transition: all 0.3s ease;
  opacity: 0;
  position: absolute;
}

.camera.active {
  opacity: 1;
  cursor: pointer;
}

.letter {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: var(--main-color)
}

.letter.big {
  font-size: 36px;
}


</style>