<script setup lang="ts">
import Button from '@/shared/ui/button/ui/Button.vue';
import "primeicons/primeicons.css";


defineProps<{ onClose: () => void }>();
</script>

<template>
  <div class="edit">
    <Button
      label="Редактировать"
      type="button"
      style="height: 40px; border: 1px solid var(--border-color)"
      @click="onClose"
      color="white"
    >
      <i class="pi pi-pencil" />
    </Button>
  </div>
</template>

<style scoped>
.edit {
  max-width: 200px;
  width: 100%;
}

</style>
