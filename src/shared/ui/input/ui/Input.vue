<script setup lang="ts">
import { useAttrs } from "vue";

defineProps<{
  modelValue?: string;
  placeholder?: string;
  type: string;
  maxWidth?: string;
  label?: string
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const attrs = useAttrs();
</script>

<template>
  <label class="label">
    {{ label }}
    <div :style="{ maxWidth: maxWidth + 'px' }" class="inputWrapper">
      <slot name="leftIcon"/>
      <input
        class="input"
        :placeholder="placeholder"
        :type="type"
        v-bind="attrs"
        :value="modelValue"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <slot name="rightIcon"/>
    </div>
  </label>
</template>

<style scoped>

.label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #838383
}

.inputWrapper {
  background-color: var(--accent-color);
  border: 1px solid var(--border-color);
  height: 50px;
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  gap: 15px;
  transition: border-color 0.3s ease;
  cursor: text;
}

.input {
  background: none;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: var(--main-color);
}

.input:focus {
  outline: none;
}

.inputWrapper:has(input:focus) {
  border-color: #838383;
}

.inputWrapper:hover {
  border-color: #838383;
}
</style>
