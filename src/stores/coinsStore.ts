import { defineStore } from "pinia";
import type { Coin } from "../types/Coin";

export const coinsStore = defineStore('coinsStore', {
    state:()=>({
       coinList:[] as Coin[]
    }),
    actions:{
        updateCoinList(newCoins:Coin[]){
            this.coinList = newCoins;
        }
    }
});