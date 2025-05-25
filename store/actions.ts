import { defineStore } from "pinia";
import { ref } from "vue";
import { useInitialGame } from "./game";

export const useActionsStore = defineStore('actionsStore', () => {
    type PartKey = 'biomechanism' | 'processor' | 'soul';

    const gameStore = useInitialGame();

    const addCoins = (amount: number) => {
        if (gameStore.coins <= 100) {
            if (amount < 0) return;
            gameStore.coins += amount;
        }
    }

    const buyPart = (part: PartKey) => {
        if (!gameStore.canAffordPurchase(part)) {
            return false;
        };

        const cost = gameStore.marketPrices[part];
        gameStore.coins -= cost;

        gameStore.wareHouse[part].count += 1;
    }

    const sellPart = (part: PartKey) => {

        const cost = gameStore.wareHouse[part];
        gameStore.coins += cost.sellPrice

        cost.count -= 1;
    }

    return {
        addCoins,
        buyPart,
        sellPart
    }
})