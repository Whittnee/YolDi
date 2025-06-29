import { api } from "@/shared/api";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ value: string }> => {
  return api<{ value: string }>("/auth/login", {
    method: "POST",
    body: { email, password },
  });
};