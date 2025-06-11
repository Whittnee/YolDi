<script setup lang="ts">
import { useProfileStore } from '@/entities/user/model/profile';
const profile = useProfileStore();

</script>

<template>
  <footer class="footer" v-if="!profile.isAuth">
    <div>
      <span v-if="$route.path !== '/signup'" class="span"
        >Ещё нет аккаунта?
        <RouterLink to="/signup"
          ><span class="link">Зарегистрироваться</span></RouterLink
        ></span
      >
      <span v-else class="span"
        >Уже есть аккаунт?
        <RouterLink to="/signin"
          ><span class="link">Войти</span></RouterLink
        ></span
      >
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px 0;
  border-top: 1px solid #e6e6e6;
}

.span {
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: #838383;
}

.link {
  color: var(--main-color);
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}
.link:hover {
  color: #838383;
}

</style>
