<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ name: string; avatarUrl?: string; size: 'normal' | 'big' }>();
const letter = computed(() => props.name.charAt(0).toUpperCase());
</script>

<template>
  <div :class="['avatar', size]">
    <img v-if="avatarUrl" class="image" :src="props.avatarUrl"></img>
    <span :class="['letter', size]" class="letter" v-if="!props.avatarUrl">{{ letter }}</span>
  </div>
</template>

<style scoped>

.avatar {
  display: flex;
  background-color: #F3F3F3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
}

.avatar.big {
  width: 100px;
  height: 100px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
  object-position: center;
}

.letter {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #000
}

.letter.big {
  font-size: 36px;
}


</style>