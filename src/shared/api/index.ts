import { API_URL } from "@/shared/config/env"

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().catch(err => Promise.reject(err))
}

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface RequestOptions {
  method?: Method
  body?: Record<string, unknown>
  headers?: Record<string, string>
  withAuth?: boolean
}

export async function api<T = unknown>(url: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, headers = {}, withAuth = true } = options;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers 
  }

   if (withAuth) {
    const token = localStorage.getItem("accessToken")
    if (token) {
      defaultHeaders["X-API-KEY"] = token
    }
  }

  const response = await fetch(API_URL + url, {
    method, 
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined
  })

  return checkResponse<T>(response)
}