<script setup>
const props = defineProps({
  msg: String,
});
</script>

<template>
  <header id="header">
    <div class="nav">
      <nav id="nav">
        <a href="#">Libros</a>
        <a href="#">Peliculas</a>
        <a href="#">Series</a>
      </nav>
    </div>
    <h1>{{ msg }}</h1>
    <p>
      Una app en la que guardo mis libros, películas y series favoritas al mismo
      tiempo que aprendo Vue 🟢 😄
    </p>
  </header>
</template>

<style lang="scss">
@import "../styles/variables";
#header {
  width: 100%;
  background-color: $blue;
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
      }
    }
  }
  h1 {
    color: $white-text;
    font-family: $title;
  }
  p {
    color: $white-text;
    font-family: $normal;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
}
</style>