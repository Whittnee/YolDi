<script setup lang="ts">
import { useProfileStore } from "@/entities/user/model/profile";
import { useUserStore } from "@/entities/user/model/user";
import Avatar from "@/shared/ui/avatar/ui/Avatar.vue";
import Modal from "@/shared/ui/modal/ui/Modal.vue";
import Name from "@/shared/ui/name/ui/Name.vue";
import Preloader from "@/shared/ui/preloader/ui/Preloader.vue";
import "primeicons/primeicons.css";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Cover from "@/shared/ui/cover/ui/Cover.vue";
import { useProfileImage } from "@/shared/hooks/useProfileImage";
import EditProfileButtonFeature from "@/features/edit-profile-button-feature/ui/EditProfileButtonFeature.vue";
import LogoutButtonFeature from "@/features/logout-button-feature/ui/LogoutButtonFeature.vue";
import EditProfileFeature from "@/features/edit-profile-feature/ui/EditProfileFeature.vue";
import { useMobile } from "@/shared/hooks/useMobile";

const profile = useProfileStore();
const route = useRoute();
const user = useUserStore();
const editProfileModal = ref<boolean>(false);
const { isMobile } = useMobile()

const { avatarRef, coverRef, handleChangePicture, handleRemovePicture } =
  useProfileImage(profile);

const viewedId = computed(() => route.params.id?.toString());

watch(
  viewedId,
  (id) => {
    user.fetchUser(id);
  },
  { immediate: true }
);

const isOwnProfile = computed(() => profile.user?.slug === viewedId.value);

const handleCloseModal = () => {
  editProfileModal.value = !editProfileModal.value;
};
</script>

<template>
  <div class="preloader" v-if="user.isLoading">
    <Preloader />
  </div>

  <div v-else-if="!isMobile || !editProfileModal" class="profile">
    <div class="cover">
      <Cover
        :background-image="user.user?.cover?.url"
        :hover="isOwnProfile"
        :onClick="
          () => {
            if (isOwnProfile) {
              user.user.cover
                ? handleRemovePicture(`cover`)
                : coverRef?.click();
            }
          }
        "
      />
      <input
        ref="coverRef"
        v-if="isOwnProfile"
        type="file"
        class="hidden cover"
        accept="image/*,.png,.jpg,.web"
        @change="(e: Event) => handleChangePicture(e, `cover`)"
      />
    </div>
    <div class="user">
      <div class="image">
        <Avatar
          :avatar-url="user.user?.image?.url"
          size="big"
          :name="user.user?.name"
          :hover="isOwnProfile"
          @click="avatarRef?.click()"
        />
        <input
          ref="avatarRef"
          v-if="isOwnProfile"
          type="file"
          class="hidden avatar"
          accept="image/*,.png,.jpg,.web"
          @change="(e) => handleChangePicture(e as Event, `image`)"
        />
      </div>
      <div class="info">
        <div class="container">
          <Name :name="user.user?.name" size="big" data-testid="name" />
          <EditProfileButtonFeature
            class="editProfileButton"
            v-if="isOwnProfile"
            :onClose="handleCloseModal"
            data-testid="editProfileButton"
          />
        </div>
        <div class="description">
          <span class="email">{{ user.user?.email }}</span>
          <p data-testid="description" class="about">
            {{ user.user?.description }}
          </p>
        </div>
      </div>
      <LogoutButtonFeature v-if="isOwnProfile" data-testid="logoutButton" />
    </div>
  </div>

  <EditProfileFeature
    v-if="editProfileModal && isMobile"
    :onClose="handleCloseModal"
    data-testid="editProfileForm"
  />

  <Modal v-if="editProfileModal && !isMobile" :onClose="handleCloseModal">
    <EditProfileFeature
      :onClose="handleCloseModal"
      data-testid="editProfileForm"
    />
  </Modal>
</template>

<style scoped>
.preloader {
  align-self: center;
  margin: 0 auto;
}

.profile {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.cover {
  position: relative;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 1000px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
}

.hidden {
  opacity: 0;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  width: 0;
  position: absolute;
}

.hidden.cover {
  top: 50%;
  left: 46%;
  transform: translate(-50%, -46%);
}

.hidden.avatar {
  top: 50%;
}

.image {
  transform: translateY(-50%);
  position: relative;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 75%;
}

.email {
  color: #838383;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
}

.about {
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: var(--main-color);
}

@media (width <= 425px) {
  .info {
    gap: 15px;
  }
  .container {
    flex-direction: column;
    align-items: start;
    gap: 15px;
    justify-content: start;
  }
  .description {
    width: 100%;
  }

  .editProfileButton {
    max-width: 180px;
  }
}
</style>
