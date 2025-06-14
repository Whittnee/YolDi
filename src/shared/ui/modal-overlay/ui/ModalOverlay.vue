<script setup lang="ts">
defineProps<{ onClose: () => void }>();
</script>

<template>
  <Teleport to="#modal">
    <div
      class="overlay"
      :onclick="(e: Event) => {
    if(e.target === e.currentTarget) onClose()
  }"
      :onkeydown="(e: KeyboardEvent) => {
    if(e.key === 'Escape') onClose();
  }"
    >
      <slot />
    </div>
  </Teleport>
</template>

<style  scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
