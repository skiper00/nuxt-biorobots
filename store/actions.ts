import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useInitialGame } from './game';

export const useActionsStore = defineStore('actionsStore', () => {
  type PartKey = 'biomechanism' | 'processor' | 'soul';

  const gameStore = useInitialGame();

  const addCoins = (amount: number) => {
    if (amount < 0) return;

    if (gameStore.coins == 100) {
      gameStore.isModalOpen = true;
      return;
    }

    const newCoins = gameStore.coins + amount;

    gameStore.coins = newCoins > 100 ? 100 : newCoins;
  };

  const buyPart = (part: PartKey) => {
    if (!gameStore.canAffordPurchase(part)) {
      return false;
    }

    const cost = gameStore.marketPrices[part];
    gameStore.coins -= cost;

    gameStore.wareHouse[part].count += 1;
  };

  const sellPart = (part: PartKey) => {
    if (gameStore.wareHouse[part].count <= 0) {
      return;
    }

    const sellPrice = gameStore.wareHouse[part].sellPrice;

    if (gameStore.coins > 100) {
      gameStore.isModalOpen = true;
      return;
    }

    const newCoins = gameStore.coins + sellPrice;

    if (newCoins > 100) {
      gameStore.isModalOpen = true;
      return;
    }

    const cost = gameStore.wareHouse[part];
    gameStore.coins += cost.sellPrice;

    cost.count -= 1;
  };

  return {
    addCoins,
    buyPart,
    sellPart,
  };
});
