import type { useProfileStore } from "@/entities/user/model/profile";
import { ref } from "vue";

export const useProfileImage = (
  profile: ReturnType<typeof useProfileStore>
) => {
  const avatarRef = ref<HTMLInputElement | null>(null);
  const coverRef = ref<HTMLInputElement | null>(null);

  const handleChangePicture = (e: Event, position: "image" | "cover") => {
    const target = e.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) return;

    const formData = new FormData();
    formData.append("file", target.files[0]);
    profile.updateImage({ file: formData, position });
  };

  const handleRemovePicture = (position: "image" | "cover") => {
    profile.updateProfile({
      name: profile.user?.name || "",
      slug: profile.user?.slug || "",
      description: profile.user?.description || "",
      [`${position}Id`]: null,
    });
  };
  return {
    avatarRef,
    coverRef,
    handleChangePicture,
    handleRemovePicture,
  };
};
