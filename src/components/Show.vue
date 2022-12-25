<script setup>
import { ref } from "vue"

const listItems = ref([])

async function getData() {
  const res = await fetch('http://localhost:4567/api/v1/shows')
  const finalRes = await res.json()
  listItems.value = finalRes
  console.log(finalRes)
}
getData()
</script>

<template>
  <div class="items">
    <div class="card-item" v-for="item in listItems" :key="item.id">
      <img :src="item.image" alt="">
      <div class="card-item_info">
        <h3>{{ item.title }}</h3>
        <h4>{{ item.director }}</h4>
        <span>{{ item.rating }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";
.items {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  .card-item {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    background-color: $cards;
    padding: 1rem;
    border-radius: 10px;

    img {
      width: 100%;
      border-radius: 10px;
    }
    .card-item_info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      gap: 1rem;
      color: $white-text;
      font-family: $normal;
    }
  }
}

</style>