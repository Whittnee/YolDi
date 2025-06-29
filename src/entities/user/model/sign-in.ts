import { useProfileStore } from "@/entities/user/model/profile";
import { signIn } from "@/shared/api/sign-in";
import { defineStore } from "pinia";

export const useSignInStore = defineStore("signIn", {
  state: () => ({
    error: null as null | string,
    isLoading: false as boolean,
  }),
  actions: {
    async signIn(body: { email: string; password: string }) {
      this.isLoading = true;
      try {
        this.error = null;
        const response = await signIn(body);
        if (!response.value) throw new Error("Неправильный email или пароль");
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