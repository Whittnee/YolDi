<script setup lang="ts">
const header = document.querySelector("header");
const footer = document.querySelector("footer")
const height = `calc(100vh - ${header?.offsetHeight || 0}px - ${footer?.offsetHeight || 0}px)`

</script>

<template>
  <section class="notFound" :style="{height: height}">
    <h2 class="h2">
      404
    </h2>
    <p class="p">Page Not Found</p>
  </section>
</template>

<style scoped>

.notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.h2 {
  color: #000;
  font-weight: normal;
  font-size: clamp(5.625rem, 3.8122rem + 7.7348vw, 10rem);
  line-height: 100%;
}

.p {
  text-transform: uppercase;
  color: #000;
  font-weight: normal;
  font-size: clamp(2.1875rem, 1.0221rem + 4.9724vw, 5rem);
  line-height: 100%;
}

</style>