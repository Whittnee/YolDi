<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();

defineProps<{
  label: string;
  type: "button" | "submit" | "reset";
  color: "black" | "white";
}>();
</script>

<template>
  <button :type="type" :class="['button', color]" v-bind="attrs">
    <slot />
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  font-size: 16px;
  line-height: 160%;
  border-radius: 5px;
  width: 100%;
  transition: all 0.3s ease;
}

.button:disabled {
  pointer-events: none;
  background-color: #e0e0e0 !important;
  color: var(--default-color) !important;
}

.button.white {
  color: var(--main-color);
  background-color: var(--accent-color);
}

.button.black {
  color: var(--accent-color);
  background-color: var(--main-color);
}

.button.white:hover {
  color: #787878;
}

.button.black:hover {
  background-color: #454545;
}


</style>
