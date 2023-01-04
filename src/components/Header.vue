<script setup>
import { ref, computed, onMounted } from "vue";
import Main from "./Main.vue";
import Footer from "./Footer.vue"

const props = defineProps({
  msg: String,
});

</script>

<template>
  <header id="header">
    <div id="container">
      <div class="steam" id="steam1"> </div>
      <div class="steam" id="steam2"> </div>
      <div class="steam" id="steam3"> </div>
      <div class="steam" id="steam4"> </div>

      <div id="cup">
        <div id="cup-body">
          <div id="cup-shade"></div>
        </div>
        <div id="cup-handle"></div>
      </div>

      <div id="saucer"></div>

      <div id="shadow"></div>
    </div>

    <div id="container2">
      <div class="steam" id="steam1"> </div>
      <div class="steam" id="steam2"> </div>
      <div class="steam" id="steam3"> </div>
      <div class="steam" id="steam4"> </div>

      <div id="cup">
        <div id="cup-body">
          <div id="cup-shade"></div>
        </div>
        <div id="cup-handle"></div>
      </div>
      <div id="saucer"></div>
      <div id="shadow"></div>
    </div>

    <div class="nav">
      <nav id="nav">
        <i class="fa-solid fa-house-user"></i>
        <RouterLink ref="books" to="/books">Libros</RouterLink>
        <RouterLink ref="movies" to="/movies">Peliculas</RouterLink>
        <RouterLink ref="shows" to="/shows">Series</RouterLink>
      </nav>
    </div>

    <h1 ref="titlePage">{{ msg }}</h1>
    <p>
      Una app en la que guardo mis libros, películas y series favoritas al mismo
      tiempo que aprendo Vue 🟢 😄
    </p>
  </header>

  <hr>

  <Main />
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

.main {
  padding-top: 4rem;
}
hr {
  margin: 0 auto;
  margin-top: 40px;
  width: 40%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(66, 82, 105, 1), rgb(209, 209, 209), rgba(66, 82, 105, 1));
}

#container {
  position: absolute;
  top: 30%;
  left: 18.2%;
  transform: translate(-50%, -50%);
}

#container2 {
  position: absolute;
  top: 30%;
  left: 81.8%;
  transform: translate(-50%, -50%);
}
.steam {
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #fff;
  margin-top: -10px;
  margin-left: 25px;
  z-index: 0;
  opacity: 0;
}

#steam1 {
  -webkit-animation: steam1 5s ease-out infinite;
  animation: steam1 5s ease-out infinite;
}

#steam3 {
  -webkit-animation: steam1 5s ease-out 3s infinite;
  animation: steam1 5s ease-out 3s infinite;
}

@-webkit-keyframes steam1 {
  0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
  100% {transform: translateY(-200px) translateX(-20px) scale(1); opacity: 0;}
}

@keyframes steam1 {
  0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
  100% {transform: translateY(-200px) translateX(-20px) scale(1); opacity: 0;}
}

#steam2 {
  -webkit-animation: steam2 5s ease-out 3s infinite;
  animation: steam2 5s ease-out 3s infinite;
}

#steam4 {
  -webkit-animation: steam2 5s ease-out 1.5s infinite;
  animation: steam2 5s ease-out 1.5s infinite;
}

@-webkit-keyframes steam2 {
  0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
  100% {transform: translateY(-200px) translateX(20px) scale(1); opacity: 0;}
}

@keyframes steam2 {
  0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
  100% {transform: translateY(-200px) translateX(20px) scale(1); opacity: 0;}
}

#cup {
  z-index: 1;
}

#cup-body {
  position: absolute;
  height: 25px;
  width: 50px;
  border-radius: 0 0 150px 150px;
  background-color: #fff;
  margin: auto;
  display: inline-block;
  overflow: hidden;
  z-index: 1;
}

#cup-shade {
  position: relative;
  height: 75px;
  width: 50px;
  background-color: #F3F3F3;
  display: inline-block;
  margin-left: 42%;
  margin-top: -3px;
  transform: rotate(50deg);
  z-index: 1;
}

#cup-handle {
  
  height: 8px;
  width: 10px;
  border-radius: 0 150px 150px 0;
  border: 4px solid #F3F3F3;
  margin-bottom: 95px;
  margin-left: 42px;
  display: inline-block;
  z-index: 0;
}

#saucer {
  position: absolute;
  height: 6px;
  width: 50px;  
  border-radius: 0 0 100px 100px;
  background-color: #F9F9F9;
  margin-top: -92px;
  margin-left: 2px;
  z-index: 2;
}

#shadow {
  height: 2.5px;
  width: 60px;
  border-radius: 50%;
  margin-top: -85px;
  margin-left: -3px;
  background-color: $blue;
}
</style>