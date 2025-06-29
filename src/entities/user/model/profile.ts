import { useUserStore } from "@/entities/user/model/user";
import {
  getProfile,
  patchImage,
  patchProfile,
  type IPatchProfile,
} from "@/shared/api/profile";
import type { TUser } from "@/shared/types/user";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    user: null as null | TUser,
    isAuth: false as Boolean,
  }),
  actions: {
    async fetchProfile() {
      try {
        const response = await getProfile();
        this.user = response;
        this.isAuth = true;
      } catch {
        console.error("Ошибка, не удалось запросить профиль!");
      }
    },
    async updateProfile(body: IPatchProfile) {
      try {
        const response = await patchProfile(body);
        this.user = response;
        const user = useUserStore();
        user.fetchUser(user.user.slug);
      } catch {
        console.error("Ошибка, не удалось обновить профиль!");
      }
    },
    async updateImage({
      file,
      position,
    }: {
      file: FormData;
      position: "image" | "cover";
    }) {
      try {
        const response = await patchImage(file);
        this.updateProfile({
          [`${position}Id`]: response.id,
          name: this.user?.name || '',
          slug: this.user?.slug || '',
          description: this.user?.description || '',
        });
      } catch {
        console.log("123");
      }
    },
    logout() {
      localStorage.removeItem("accessToken");
      this.user = null;
      this.isAuth = false;
    },
  },
});
