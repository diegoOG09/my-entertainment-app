<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const listItems = ref([])

async function getData() {
  const res = await fetch('http://localhost:4567/api/v1/books')
  const finalRes = await res.json()
  listItems.value = finalRes
  console.log(finalRes)
}
getData()
</script>

<template>
  <div v-for="item in listItems" :key="item.id">
    <img :src="item.image" alt="">
    {{item.title}}
    {{item.author}}
    {{ item.isbn }}
  </div>
</template>

<style>
</style>