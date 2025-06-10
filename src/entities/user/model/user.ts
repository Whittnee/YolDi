import { getUser } from "@/shared/api/user";
import type { TUser } from "@/shared/types/user";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as TUser,
    isLoading: false as boolean
  }),
  actions: {
    async fetchUser(id: string) {
      this.isLoading = true;
      try {
        const response = await getUser(id);
        this.user = response
      } catch {
        console.error('Ошибка, не удалось получить пользователя!')
      } finally {
        this.isLoading = false;
      }
    }
  }
}) 