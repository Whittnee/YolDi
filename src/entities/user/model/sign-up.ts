import { useProfileStore } from "@/entities/user/model/profile";
import { signUp } from "@/shared/api/sign-up";
import { defineStore } from "pinia";

export const useSignUpStore = defineStore("signUp", {
  state: () => ({
    error: null as null | string,
    isLoading: false as boolean,
  }),
  actions: {
    async signUp(body: { email: string; name: string; password: string }) {
      this.isLoading = true;
      try {
        this.error = null
        const response = await signUp(body);
        if (!response.value) throw new Error("Не удалось создать аккаунт");
        localStorage.setItem("accessToken", response.value);
        const profile = useProfileStore();
        profile.fetchProfile()
      } catch (e: any) {
        this.error = e.message
        console.error(e.message)
      } finally {
        this.isLoading = false;
      }
    },
  },
});
