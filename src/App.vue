<script setup lang="ts">
 import NavBar from "./components/NavBar.vue"; 
 import CoinGrid from "./components/CoinGrid.vue";
</script>

<template>
  <div class="container">
    <NavBar></NavBar>
    <CoinGrid></CoinGrid>
  </div> 
</template>

<style scoped>
.container{
  width:calc(100% - 60px);
  padding: 1em;
}
</style>
