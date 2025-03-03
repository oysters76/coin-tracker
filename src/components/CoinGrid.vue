<script setup lang="ts">
 import type { Coin } from '../types/Coin';
import CoinBucket from './CoinBucket.vue';

 const coinList:Coin[] = [
  {
    coinSymbol:"BTC", 
    coinImgSrc:"https://coin-images.coingecko.com/coins/images/11610/large/Bitget_logo.png?1736925727",
    coinPrice:2340, 
    isPositive:true
  },
  {
    coinSymbol:"BTC", 
    coinImgSrc:"https://coin-images.coingecko.com/coins/images/11610/large/Bitget_logo.png?1736925727",
    coinPrice:2340, 
    isPositive:false
  },
  {
    coinSymbol:"BTC", 
    coinImgSrc:"https://coin-images.coingecko.com/coins/images/11610/large/Bitget_logo.png?1736925727",
    coinPrice:2340, 
    isPositive:true
  },
  {
    coinSymbol:"BTC", 
    coinImgSrc:"https://coin-images.coingecko.com/coins/images/11610/large/Bitget_logo.png?1736925727",
    coinPrice:2340, 
    isPositive:true
  },
  {
    coinSymbol:"BTC", 
    coinImgSrc:"https://coin-images.coingecko.com/coins/images/11610/large/Bitget_logo.png?1736925727",
    coinPrice:2340, 
    isPositive:true
  }
 ]
</script>

<template>
   <main class="coin-bucket-container">
      <CoinBucket title="Tracked Coins" bucketType="tracked" :coins="coinList"></CoinBucket>
      <CoinBucket title="Alert if above" bucketType="above" :coins="coinList"></CoinBucket>
      <CoinBucket title="Alert if below" bucketType="below" :coins="coinList"></CoinBucket>
   </main>
</template>

<style scoped>
 .coin-bucket-container{
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(1, 100%);
  min-width: 100%;
  min-height:calc(100vh - 200px);
  column-gap: 1em;
  overflow-x: hidden;
  overflow-y: auto;
 }

</style>
