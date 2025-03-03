<script setup lang="ts">
 import CoinCard from "./CoinCard.vue";
</script>

<template>
   <div class="coin-bucket coin-bucket-tracked">
          <label>Tracked Coins</label>
          <div class="coin-container">
              <CoinCard />
              <CoinCard />
              <CoinCard />
              <CoinCard />
          </div>
      </div>
</template>

<style scoped>
 .coin-bucket{
  display: flex;
  flex-direction: column;
  background: #D9D9D9;
  margin: 0;
  padding: 0; 
  border-radius: 12px;
  gap: 1em;
 }

 .coin-bucket-tracked{
  grid-column: 1 / 1;
  grid-row: 1 / span 3;
 }

 .coin-bucket-above{
  grid-column: 2 / 2;
  grid-row: 1 / span 3;
 }

 .coin-bucket-below{
  grid-column: 3 / 3;
  grid-row: 1 / span 3;
 }

 .coin-bucket > label{
  font-weight: bold;
  padding: 1em
 }

 .coin-container{
  display: grid;
    grid-template-columns: repeat(4, 22%);
    grid-auto-flow: row;
    row-gap: 0.2em;
    column-gap: 0.5em;
    justify-content: center;
 }
</style>
