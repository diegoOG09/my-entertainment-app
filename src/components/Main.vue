<script setup>
import { ref, computed, onMounted } from "vue";
import Book from "./Book.vue";
import Movie from "./Movie.vue";
import Show from "./Show.vue";
import Header from "./Header.vue";

const props = defineProps({
  category: String,
});
</script>

<template>
  <main id="main">
    <div class="container">
      <div class="subtitle">
        <span class="icon books" v-if="category === 'Libros'"><i class="fa-solid fa-book"></i></span>
        <span class="icon movies" v-if="category === 'Peliculas'"><i class="fa-solid fa-film"></i></span>
        <span class="icon series" v-if="category === 'Series'"><i class="fa-solid fa-film"></i></span>
        <h2>{{ category }}</h2>
      </div>
    </div>
    <RouterView class="container main" />
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/variables";
main {
  padding-top: 4rem;
  height: 100vh;
  margin-bottom: 2rem;
  .subtitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: $white-text;
    font-family: $normal;
    margin-bottom: 3rem;
  }
}
</style>