<script setup lang="ts">

defineProps<{ name: string; size: 'small' | 'normal' | 'big' }>()

</script>

<template>
  <span :class="['name', size]">
    {{ name }}
  </span>
</template>

<style scoped>

.name {
  color: #000
}

.name.small {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
}

.name.normal {
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
}

.name.big {
  font-weight: 500;
  font-size: 30px;
  line-height: 140%;
}

</style>