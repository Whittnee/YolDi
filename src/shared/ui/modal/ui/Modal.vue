<script setup lang="ts">
import ModalOverlay from "../../modal-overlay/ui/ModalOverlay.vue";

defineProps<{ onClose: () => void }>();
</script>

<template>
  <ModalOverlay :onClose="onClose">
    <div class="modal">
      <slot />
    </div>
  </ModalOverlay>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 9999;
  border-radius: 7px;
  max-width: 700px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  background-color: var(--accent-color);
  justify-content: center;
  padding: 5px;
}

</style>
