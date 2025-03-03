<script setup lang="ts">
 import { computed } from 'vue';
 import { useWebSocket } from '../utils/coinWebsocket';
 import CoinBucket from './CoinBucket.vue';
 import { coinsStore } from '../stores/coinsStore';
import { userPrefStore } from '../stores/userPreferenceStore';
 
 const coinStore = coinsStore();
 const userStore = userPrefStore(); 

 const coinList = computed(() => coinStore.coinList);
 
 const trackedUserCoins = computed(()=>{
   return userStore.coinsTracked || [];
 });
 const alertAboveCoins = computed(()=>{
   return userStore.coinsAbove || [];
 });
 const alertBelowCoins = computed(()=>{
   return userStore.coinsBelow || [];
 });

 const coinListTracked = computed(()=>{
   return trackedUserCoins.value.map(coinIndex=>{
      return coinList.value[coinIndex];
   }) || [];
 })

 const coinListAbove = computed(()=>{
   return alertAboveCoins.value.map(coinIndex=>{
      return coinList.value[coinIndex];
   }) || [];
 })

 const coinListBelow = computed(()=>{
   return alertBelowCoins.value.map(coinIndex=>{
      return coinList.value[coinIndex];
   })|| [];
 })

 useWebSocket();
</script>

<template>
   <main class="coin-bucket-container">
      <CoinBucket title="Tracked Coins" bucketType="tracked" :coins="coinListTracked"></CoinBucket>
      <CoinBucket title="Alert if price above 30" bucketType="above" :coins="coinListAbove"></CoinBucket>
      <CoinBucket title="Alert if price below 30" bucketType="below" :coins="coinListBelow"></CoinBucket>
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
