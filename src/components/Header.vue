<script setup>
import { ref, computed, onMounted } from "vue";
import Main from "./Main.vue";

const props = defineProps({
  msg: String,
});

const titlePage = ref(null)
const showB = ref(false)
const showM = ref(false)
const showS = ref(false)
let category = "";

function showBooks() {
  showB.value = true
  showM.value = false
  showS.value = false
  titlePage.value.style.display = "none"
  category = "Libros"
}

function showMovies() {
  showM.value = true
  showB.value = false
  showS.value = false
  titlePage.value.style.display = "none"
  category = "Peliculas"
}

function showShows() {
  showS.value = true
  showB.value = false
  showM.value = false
  titlePage.value.style.display = "none"
  category = "Series"
}
</script>

<template>
  <header id="header">
    <div class="nav">
      <nav id="nav">
        <a ref="books" @click="showBooks" href="#">Libros</a>
        <a ref="movies" @click="showMovies" href="#">Peliculas</a>
        <a ref="shows" @click="showShows" href="#">Series</a>
      </nav>
    </div>
    <h1 v-if="showB === true">Libros</h1>
    <h1 v-if="showM === true">Peliculas</h1>
    <h1 v-if="showS === true">Series</h1>

    <h1 ref="titlePage">{{ msg }}</h1>
    <p>
      Una app en la que guardo mis libros, películas y series favoritas al mismo
      tiempo que aprendo Vue 🟢 😄
    </p>
  </header>

  <Main :category="category" />
</template>

<style lang="scss" scoped>
@import "../styles/variables";
#header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nav {
    padding: 1.5rem 0;
    #nav {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      a {
        text-decoration: none;
        color: $white-text;
        font-family: $normal;
        font-size: 1.2rem;
        transition: .8s;
        &:hover {
          filter: drop-shadow(2px 2px 30px #E3E3E3);
          font-weight: 500;
        }
      }
    }
  }
  h1 {
    color: $white-text;
    font-family: $title;
    filter: drop-shadow(2px 2px 30px #E3E3E3);
    
  }
  p {
    color: $white-text;
    font-family: $normal;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    margin-top: 1.2rem;
  }
}
</style>