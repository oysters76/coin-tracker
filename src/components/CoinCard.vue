<script setup lang="ts">
 defineProps({
    symbol:string, 
    imgUrl:string, 
    price:number, 
    isPositive:boolean
 }); 
</script>

<template>
   <div :class="{coin:true, coinPositive:isPositive, coinNegative:!isPositive}">
     <label class="coin-symbol">{{ symbol }}</label>
     <img src="{{ imgUrl }}" />
     <label class="coin-price">{{ price }}</label>
    </div>
</template>

<style scoped>
 .coin{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  color: black;
  border-radius: 10px;
  min-width: 4em;
  min-height: 6em;
  gap: 0.2em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }

 .coin > img{
  width: 3em; 
  height: auto;
 }
 
 .coinPositive{
  background: linear-gradient(#09FF00, #07C900, #059900);
 }

 .coinNegative{
  background: linear-gradient(#FF0000, #C90000, #990000);
  color: white;
 }
</style>
