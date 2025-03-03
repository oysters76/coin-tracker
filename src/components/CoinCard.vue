<script setup lang="ts">
import { computed } from 'vue';

 const props = defineProps<{
    symbol:String, 
    imgUrl:string, 
    price:number, 
    isPositive:Boolean
 }>(); 

 const classesToApply = computed(()=>{
   return {
      coin:true, 
      coinPositive:props.isPositive,
      coinNegative:!props.isPositive 
   }
 });
 const formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
     minimumFractionDigits: 0,
     maximumFractionDigits: 0, 
 });
 const priceCurrency = computed(()=>{
   return formatter.format(props.price);
 })
</script>

<template>
   <div :class="classesToApply">
     <label class="coin-symbol">{{ props.symbol }}</label>
     <img :src="props.imgUrl" />
     <label class="coin-price">{{ priceCurrency }}</label>
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
  transition: background 2s;
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
