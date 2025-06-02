import { api } from "@/shared/api";

export const signUp = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}): Promise<{ value: string}> => {
  return api<{ value: string }>("/auth/sign-up", {
    method: "POST", body: { email, name, password }
  })
};
