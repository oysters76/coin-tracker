<script setup lang="ts">

import { watch, computed, onMounted, onBeforeUnmount } from 'vue';
import { useWebSocket } from '@vueuse/core'
import CoinBucket from './CoinBucket.vue';
import { userPrefStore } from '../stores/userPreferenceStore';
import { coinsStore } from "../stores/coinsStore";
import type { Coin } from "../types/Coin";
import type { WebSocketCoin } from "../types/WebSocketCoin";
 
const coinStore = coinsStore();
const userPreferenceStore = userPrefStore(); 

const { status, data, close } = useWebSocket('ws://localhost:8000/ws', {
  autoReconnect: true,
})

watch(data, (newData)=>{
  const webSocketCoinList = JSON.parse(data.value) as WebSocketCoin[]; 
  if (!webSocketCoinList) return;
  const coinList = webSocketCoinList.map(webSocketCoin=>{
    return {
      coinSymbol:webSocketCoin.symbol.toUpperCase(), 
      coinImgSrc:webSocketCoin.image, 
      coinPrice:Math.abs(webSocketCoin.price), 
      isPositive:webSocketCoin.isPositive
    } as Coin
  }); 
  coinStore.updateCoinList(coinList);
}, {deep:true, immediate:true});

 const trackedCoins = computed(()=>{
   return userPreferenceStore.coinsTracked.map((index)=>{
    return coinStore.coinList[index] || 
       {coinSymbol:"Loading", coinImgSrc:"", coinPrice:0, isPositive:false};
   }) || [];
 }); 
 
 const alertAboveCoins = computed(()=>{
   return userPreferenceStore.coinsAbove.map((index)=>{
    return coinStore.coinList[index] || 
       {coinSymbol:"Loading", coinImgSrc:"", coinPrice:0, isPositive:false};
   }) || [];
 }); 
 
 const alertBelowCoins = computed(()=>{
   return userPreferenceStore.coinsBelow.map((index)=>{
    return coinStore.coinList[index] || 
       {coinSymbol:"Loading", coinImgSrc:"", coinPrice:0, isPositive:false};
   }) || [];
 }); 
 

 onBeforeUnmount(() => {
   close();
 });

</script>

<template>
   <main class="coin-bucket-container">
      <CoinBucket title="Tracked Coins" bucketType="tracked" :coins="trackedCoins"></CoinBucket>
      <CoinBucket title="Alert if price above $30" bucketType="above" :coins="alertAboveCoins"></CoinBucket>
      <CoinBucket title="Alert if price below $30" bucketType="below" :coins="alertBelowCoins"></CoinBucket>
   </main>
</template>

<style scoped>
 .coin-bucket-container{
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(1, 100%);
  min-width: calc(100vw - 120px);
  min-height: calc(100vh - 200px);
  column-gap: 1em;
 }

</style>
