<script setup lang="ts">
import { useAttrs } from "vue";

defineProps<{
  modelValue?: string;
  placeholder?: string;
  rows: number;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const attrs = useAttrs();
</script>

<template>
  <label class="label">
    {{ label }}
    <div class="textareaWrapper">
      <textarea
        class="textarea"
        :rows="rows"
        :placeholder="placeholder"
        :value="modelValue"
        v-bind="attrs"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </div>
  </label>
</template>

<style scoped>
.label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #838383;
}

.textareaWrapper {
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

.textarea {
  background: none;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: var(--main-color);
  resize: none;
}

.textarea:focus {
  outline: none;
}

.textareaWrapper:has(textarea:focus) {
  border-color: #838383;
}

.textareaWrapper:hover {
  border-color: #838383;
}
</style>
