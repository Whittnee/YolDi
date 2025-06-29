<script setup lang="ts">
import { useAttrs } from 'vue';

defineProps<{ name: string | undefined; size: "small" | "normal" | "big" }>();
const attrs = useAttrs();

</script>

<template>
  <span :class="['name', size]" v-bind="attrs">
    {{ name }}
  </span>
</template>

<style scoped>
.name {
  color: var(--main-color);
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
