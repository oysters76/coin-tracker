<script setup lang="ts">
 import CoinCard from "./CoinCard.vue";
 import {type Coin} from "../types/Coin" 
import { computed } from "vue";

 const props = defineProps<{
    title:String, 
    coins:Coin[],
    bucketType:"tracked"|"above"|"below"
 }>();

 const classesToApply = computed(()=>{
    return {
        coinBucket:true, 
        coinBucketTracked: props.bucketType === "tracked", 
        coinBucketAbove: props.bucketType === "above", 
        coinBucketBelow: props.bucketType === "below"
    }
 });

</script>

<template>
   <div :class="classesToApply">
          <label>{{ props.title }}</label>
          <div class="coin-container">
            <CoinCard v-for="coin in props.coins" 
                :symbol="coin.coinSymbol" :img-url="coin.coinImgSrc" 
                :price="coin.coinPrice" :is-positive="coin.isPositive"></CoinCard>
          </div>
      </div>
</template>

<style scoped>
 .coinBucket{
  display: flex;
  flex-direction: column;
  background: #D9D9D9;
  margin: 0;
  padding: 0; 
  border-radius: 12px;
  gap: 1em;
 }

 .coinBucketTracked{
  grid-column: 1 / 1;
  grid-row: 1 / span 3;
 }

 .coinBucketAbove{
  grid-column: 2 / 2;
  grid-row: 1 / span 3;
 }

 .coinBucketBelow{
  grid-column: 3 / 3;
  grid-row: 1 / span 3;
 }

 .coinBucket > label{
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
