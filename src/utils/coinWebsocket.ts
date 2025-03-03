import { coinsStore } from "../stores/coinsStore";
import type { Coin } from "../types/Coin";
import type { WebSocketCoin } from "../types/WebSocketCoin";

export function useWebSocket(url="ws://localhost:8000/ws/") {
    const socket = new WebSocket(url);
    const store = coinsStore();
  
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };
  
    socket.onmessage = (event) => {
      console.log(event.data);
      const webSocketCoinList = JSON.parse(event.data) as WebSocketCoin[]; 
      const coinList = webSocketCoinList.map(webSocketCoin=>{
        return {
            coinSymbol:webSocketCoin.symbol, 
            coinImgSrc:webSocketCoin.image, 
            coinPrice:webSocketCoin.price, 
            isPositive:webSocketCoin.isPositive
        } as Coin
      }); 
      store.updateCoinList(coinList);
    };
  
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    return socket;
  }