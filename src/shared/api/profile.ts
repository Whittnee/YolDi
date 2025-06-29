import { api, checkResponse } from "@/shared/api"
import { API_URL } from "@/shared/config/env"
import type { TImage } from "@/shared/types/image"
import type { TUser } from "@/shared/types/user"

export interface IPatchProfile {
  name: string
  slug: string
  description: string
  imageId?: string;
  coverId?: string | null;
}

export const getProfile = async(): Promise<TUser> => {
  return api<TUser>("/profile", {withAuth: true})
}

export const patchProfile = async(body: IPatchProfile): Promise<TUser> => {
  return api<TUser>("/profile", { withAuth: true, method: "PATCH", body: {...body} })
}

export const patchImage = async (file: FormData): Promise<TImage> => {
  const response = await fetch(API_URL + '/image', {
    method: 'POST',
    body: file
  })
  return checkResponse<TImage>(response)
} 