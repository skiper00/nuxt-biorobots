import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export type PartKey = 'biomechanism' | 'processor' | 'soul';
export const useInitialGame = defineStore('game', () => {
  const isModalOpen = ref(false);
  const coins = ref(0);
  const productionCoins = ref(10);
  const justProduced = ref(false);
  const marketPrices = ref<{ [key in PartKey]: number }>({
    biomechanism: 7,
    processor: 5,
    soul: 25,
  });

  const wareHouse = reactive<{
    [key in PartKey]: { count: number; sellPrice: number };
  }>({
    biomechanism: { count: 0, sellPrice: 5 },
    processor: { count: 0, sellPrice: 3 },
    soul: { count: 0, sellPrice: 15 },
  });

  const production = reactive<{ [key in PartKey]: boolean[] }>({
    biomechanism: [false, false, false, false],
    processor: [false, false, false, false],
    soul: [false],
  });

  const robotConfig = ref<{
    type: 'FrontEnd' | 'Design';
    gender: 'Male' | 'Female';
  }>({
    type: 'FrontEnd',
    gender: 'Male',
  });


  const canAffordPurchase = (part: PartKey) => {
    return coins.value >= marketPrices.value[part];
  };

  const canStartProduction = () => {
    const hasEnoughParts =
      production.biomechanism.filter(Boolean).length === 4 &&
      production.processor.filter(Boolean).length === 4 &&
      production.soul.filter(Boolean).length === 1;

    const enoughCoins = coins >= productionCoins;

    return hasEnoughParts && enoughCoins;
  };

  const hasEnoughParts = computed(() => {
    return (
      wareHouse.biomechanism.count >= 4 &&
      wareHouse.processor.count >= 4 &&
      wareHouse.soul.count >= 1
    );
  });

  return {
    coins,
    wareHouse,
    marketPrices,
    production,
    robotConfig,
    productionCoins,
    canAffordPurchase,
    canStartProduction,
    isModalOpen,
    justProduced,
    hasEnoughParts,
  };
});
