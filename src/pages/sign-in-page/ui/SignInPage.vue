<script setup lang="ts">
import SignInForm from '@/widgets/sign-in-form/ui/SignInForm.vue';
</script>

<template>
  <div class="signInPage">
    <SignInForm/>
  </div>
</template>

<style scoped>
.signInPage {
  background-color: var(--default-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

@media (width <= 425px) {
  .signInPage {
    background-color: var(--accent-color);
    align-items: start;
  }
}
</style>