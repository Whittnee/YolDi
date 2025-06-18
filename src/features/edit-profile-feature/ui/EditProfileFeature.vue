<script setup lang="ts">
import { useProfileStore } from "@/entities/user/model/profile";
import Button from "@/shared/ui/button/ui/Button.vue";
import Input from "@/shared/ui/input/ui/Input.vue";
import Textarea from "@/shared/ui/textarea/ui/Textarea.vue";
import { computed, reactive, watch } from "vue";
import { useRouter } from "vue-router";
const profile = useProfileStore();
const router = useRouter();

const props = defineProps<{ onClose: () => void }>();

const form = reactive({
  name: profile.user?.name || "",
  slug: profile.user?.slug || "",
  description: profile.user?.description || "",
});

const handleUpdateProfile = async (e: Event) => {
  e.preventDefault();
  await profile.updateProfile({ ...form });
  props.onClose();
};

const slug = computed(() => profile.user?.slug);

watch(slug, (newUrl) => {
  router.replace(`/profile/${newUrl}`);
});
</script>

<template>
  <form class="editProfile" @submit="handleUpdateProfile($event)">
    <h3 class="h3">Редактировать профиль</h3>
    <div class="info">
      <div class="name">
        <Input type="text" label="Имя" v-model="form.name" />
      </div>
      <div class="address">
        <Input type="text" label="Адрес профиля" v-model="form.slug" />
      </div>
      <div class="description">
        <Textarea  label="Описание" v-model="form.description" :rows="5" data-testid="descriptionTextarea"/>
      </div>
    </div>
    <ul class="controllers">
      <li class="button">
        <Button
          @click="onClose"
          type="button"
          style="height: 50px; border: 1px solid var(--border-color)"
          label="Отмена"
          color="white"
        />
      </li>
      <li class="button">
        <Button
          type="submit"
          style="height: 50px"
          label="Сохранить"
          color="black"
        />
      </li>
    </ul>
  </form>
</template>

<style scoped>
.editProfile {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--accent-color);
  gap: 25px;
  padding: 30px;
}

.controllers {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
}

.button {
  max-width: 300px;
  width: 100%;
}

.h3 {
  font-weight: 500;
  font-size: 30px;
  line-height: 140%;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>