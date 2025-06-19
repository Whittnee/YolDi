<script setup lang="ts">
import { useSignInStore } from "@/entities/user/model/sign-in";
import Button from "@/shared/ui/button/ui/Button.vue";
import Input from "@/shared/ui/input/ui/Input.vue";
import { onMounted, reactive, ref } from "vue";

const signIn = useSignInStore();

const form = reactive({
  email: "",
  password: "",
});

const isVisible = ref<boolean>(false);

onMounted(() => {
  signIn.error = null;
})

const hadnleSignIn = (e: Event) => {
  e.preventDefault();
  signIn.signIn(form);
};
</script>

<template>
  <form class="form" @submit="hadnleSignIn">
    <h2 class="h2">Вход в Yoldi Agency</h2>
    <div class="inputs">
      <Input
        placeholder="E-mail"
        type="email"
        max-width="330"
        v-model="form.email"
        data-testid="emailInput"
      >
        <template #leftIcon>
          <i
            class="pi pi-envelope"
            style="color: var(--main-color); font-size: 18px"
          />
        </template>
      </Input>
      <Input
        placeholder="Пароль"
        :type="isVisible ? 'text' : 'password'"
        max-width="330"
        v-model="form.password"
        data-testid="passwordInput"
      >
        <template #leftIcon>
          <i
            class="pi pi-lock"
            style="color: var(--main-color); font-size: 18px"
          />
        </template>
        <template #rightIcon>
          <i
            :class="['pi', isVisible ? 'pi-eye-slash' : 'pi-eye']"
            style="color: var(--main-color); font-size: 20px"
            @click="isVisible = !isVisible"
            :style="{ cursor: 'pointer' }"
          />
        </template>
      </Input>
    </div>
    <span v-if="signIn.error" class="error">{{ signIn.error }} </span>
    <Button
      type="submit"
      label="Войти"
      style="height: 50px"
      :disabled="
        signIn.isLoading ||
        !Object.values(form).every((val) => val.trim() !== '')
      "
      color="black"
    />
  </form>
</template>

<style scoped>
.form {
  background-color: var(--accent-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px 35px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
}

.h2 {
  color: var(--main-color);
  font-weight: 500;
  font-size: 30px;
  line-height: 140%;
  margin-right: auto;
}

.error {
  margin-right: auto;
  color: #d73a3a;
  font-size: 14px;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

@media (width <= 425px) {
  .form {
    border: none;
  }
}
</style>
