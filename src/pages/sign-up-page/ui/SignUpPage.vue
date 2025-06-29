<script setup lang="ts">
import SignUpForm from "@/widgets/sign-up-form/ui/SignUpForm.vue";
</script>

<template>
  <div class="signUpPage">
    <SignUpForm />
  </div>
</template>

<style scoped>

.signUpPage {
  background-color: var(--default-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

@media (width <= 425px) {
  .signUpPage {
    background-color: var(--accent-color);
    align-items: start;
  }
}

</style>
