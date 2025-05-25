import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useInitialGame = defineStore('game', () => {
    type PartKey = 'biomechanism' | 'processor' | 'soul'
    const coins = ref(0);
    const marketPrices = ref<{ [key in PartKey]: number }>({
        biomechanism: 7,
        processor: 5,
        soul: 25
    });

    const wareHouse = reactive<{ [key in PartKey]: { count: number, sellPrice: number } }>({
        biomechanism: { count: 0, sellPrice: 5 },
        processor: { count: 0, sellPrice: 3 },
        soul: { count: 0, sellPrice: 15 }
    });

    const production = ref<{ [key in PartKey]: number }>(
        {
            biomechanism: 0,
            processor: 0,
            soul: 0
        }
    );

    const robotConfig = ref<{ type: 'FrontEnd' | 'Design', gender: 'Male' | 'Female' }>(
        {
            type: 'FrontEnd',
            gender: 'Male'
        }
    );

    const productionCoins = ref(10);

    //проверка что пользователю хватает деняг на покупку запчасти
    const canAffordPurchase = (part: PartKey) => {
        return coins.value >= marketPrices.value[part]
    }

    //проверка что хотя бы одна запчасть добавлена в производство и что у пользователя хватает деняг на производство
    const canStartProduction = () => {
        const allPartsAdded = (Object.keys(production.value) as PartKey[]).every(
            (part: PartKey) => production.value[part] > 0
        );

        const enoughCoins = coins.value >= productionCoins.value
        return allPartsAdded && enoughCoins
    }

    return {
        coins,
        wareHouse,
        marketPrices,
        production,
        robotConfig,
        productionCoins,
        canAffordPurchase,
        canStartProduction,
    }
})