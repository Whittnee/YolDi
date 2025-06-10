import { getUsers } from "@/shared/api/users";
import type { TUser } from "@/shared/types/user";
import { defineStore } from "pinia";

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as TUser[],
    isLoading: false as boolean
  }),
  actions: {
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await getUsers();
        this.users = response
      } catch {
        console.error('Ошибка, не удалось запросить пользователей!')
      } finally {
        this.isLoading = false;
      }
    }
  }
}) 