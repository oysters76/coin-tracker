<script setup lang="ts">
</script>

<template>
   <main class="coin-bucket-container">
      <div class="coin-bucket coin-bucket-tracked">
          <label>Tracked Coins</label>
          <div class="coin-container">
              <div class="coin coin-positive">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-positive">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
              <div class="coin coin-negative">
                <label class="coin-symbol">BTC</label>
                <img src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                <label class="coin-price">$69,420</label>
              </div>
          </div>
      </div>
      <div class="coin-bucket coin-bucket-above">
        <label>Alert if above</label>
        <div class="coin-container">
            
        </div>
      </div>
      <div class="coin-bucket coin-bucket-below">
        <label>Alert if below</label>
        <div class="coin-container">
            
        </div>
      </div>
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
 
 .coin-positive{
  background: linear-gradient(#09FF00, #07C900, #059900);
 }

 .coin-negative{
  background: linear-gradient(#FF0000, #C90000, #990000);
  color: white;
 }
</style>
