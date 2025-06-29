import { api } from "@/shared/api"
import type { TUser } from "@/shared/types/user"


export const getUsers = async (): Promise<TUser[]> => {
  return api<TUser[]>("/user", {
    method: 'GET',
    withAuth: false
  })
}