
<template>
  <div class="preloader">
    <div class="circle"></div>
  </div>
</template>

<style scoped>
.preloader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  display: block;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--main-color);
  border-left-color: var(--main-color);
  width: 250px;
  height: 250px;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

</style>