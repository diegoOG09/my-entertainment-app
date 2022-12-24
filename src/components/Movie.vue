<script setup>
import { ref } from "vue"

const listItems = ref([])

async function getData() {
  const res = await fetch('http://localhost:4567/api/v1/movies')
  const finalRes = await res.json()
  listItems.value = finalRes
  console.log(finalRes)
}
getData()
</script>

<template>
<div v-for="item in listItems" :key="item.id">
  <img :src="item.image" alt="">
  {{ item.title }}
  {{ item.director }}
  {{ item.rating }}
</div>
</template>

<style>

</style>