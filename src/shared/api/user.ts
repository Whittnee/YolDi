import { api } from "@/shared/api"
import type { TUser } from "@/shared/types/user"

export const getUser = async (id: string): Promise<TUser> => {
  return api<TUser>(`/user${id}`, {
    method: 'GET',
    withAuth: false
  })
}