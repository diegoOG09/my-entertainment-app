<script setup>
import { ref, computed, onMounted } from "vue";
import Book from "./Book.vue";
import Header from "./Header.vue";

const props = defineProps({
  category: String,
});
</script>

<template>
  <main id="main">
    <span v-if="category === 'Libros'"><i class="fa-solid fa-book"></i></span>
    <span v-if="category === 'Peliculas'"
      ><i class="fa-solid fa-film"></i
    ></span>
    <span v-if="category === 'Series'"><i class="fa-solid fa-film"></i></span>
    <h2>{{ category }}</h2>
    <p></p>
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/variables";
main {
  height: 100vh;
}
</style>