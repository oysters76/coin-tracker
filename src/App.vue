<script setup lang="ts">
</script>

<template>
  <div class="container">
    <navbar>
      <section class="app-title-container">
        <label class="app-title">Coin Tracker</label>
        <label class="sub-app-title">Welcome Smith</label>
      </section>
      <div class="app-right">
        <section>
        <ul class="locale">
          <li class="active">English</li>
          <li>Français</li>
        </ul>
        </section>
        <section>
          <label class="theme">Light</label>
        </section>
        <section>
          <img src="./assets/settings_dark.svg" class="settings-btn" />
        </section>
      </div>
    </navbar>
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
  </div> 
</template>

<style scoped>
.container{
  width:calc(100% - 60px);
}
 navbar{
  display:flex; 
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
 }
 .app-right{
  display: flex;
  gap:2rem; 
  justify-content: flex-end;
  align-items: center;
 }
 .app-title-container{
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 70%;
 }
 .app-title{
  font-weight: bold;
  font-size: 2rem;
 }
 .locale{
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
 }
 .locale > li{
  list-style: none;
  cursor: pointer;
 }
 .active{
  font-weight: bold;
 }
 .theme{
  cursor: pointer;
 }
 .settings-btn{
  cursor: pointer;
 }
 
 .coin-bucket-container{
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(1, 100%);
  min-width: 100%;
  min-height:calc(100vh - 150px);
  column-gap: 1em;
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
  grid-template-columns: repeat(3, 25%);
  grid-auto-flow: row;
  row-gap: 0.2em;
  column-gap: 0.3em;
  justify-items: center
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
