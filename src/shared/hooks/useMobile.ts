import { onMounted, onUnmounted, ref } from "vue";

export const useMobile = () => {
  const isMobile = ref<boolean>(false);

  const handleResize = () => {
    isMobile.value = window.innerWidth <= 425;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
  return {
    isMobile
  }
};
