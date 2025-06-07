import type { TImage } from "@/shared/types/image";

export type TUser = {
  name: string;
  email: string;
  slug: string;
  description: string;
  image: TImage
  cover: {
    id: string;
    url: string;
    width: string;
    height: string;
  };
}
