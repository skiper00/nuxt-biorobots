<template>
  <div class="produce-button flex items-center gap-6">
    <button :class="{ disabled: !gameStore.canStartProduction() }"
      class="w-full max-w-[236px] px-[15.5px] py-[12px] rounded-full border border-2 border-primary-orange text-white font-semibold text-base cursor-pointer"
      @click="produceRobot">
      Произвести за 10 монет
    </button>
    <p class="text-[#A3B8CC] text-xs leading-4 max-w-[195px]">
      {{ getErrorMessage() }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useInitialGame, type PartKey } from '@/store/game';

const gameStore = useInitialGame();

const getErrorMessage = () => {
  const missingParts = [];

  const biomechCount = gameStore.production.biomechanism.filter(Boolean).length;
  const processorCount = gameStore.production.processor.filter(Boolean).length;
  const soulCount = gameStore.production.soul.filter(Boolean).length;

  const requiredBiomech = 4;
  const requiredProcessor = 4;
  const requiredSoul = 1;

  if (biomechCount < requiredBiomech) {
    const missing = requiredBiomech - biomechCount;
    missingParts.push(
      `${missing} биомеханизм${missing === 1 ? '' : missing < 5 ? 'а' : 'ов'}`
    );
  }

  if (processorCount < requiredProcessor) {
    const missing = requiredProcessor - processorCount;
    missingParts.push(
      `${missing} процессор${missing === 1 ? '' : missing < 5 ? 'а' : 'ов'}`
    );
  }

  if (soulCount < requiredSoul) {
    const missing = requiredSoul - soulCount;
    missingParts.push(
      `${missing} душ${missing === 1 ? 'а' : missing < 5 ? 'и' : ''}`
    );
  }

  const missingCoins = gameStore.coins < gameStore.productionCoins;

  let message = '';
  if (missingParts.length > 0) {
    message += 'Не хватает ' + missingParts.join(', ');
    if (missingCoins) {
      const neededCoins = gameStore.productionCoins - gameStore.coins;
      message += ` и ${neededCoins} монет`;
    }
  } else if (missingCoins) {
    const neededCoins = gameStore.productionCoins - gameStore.coins;
    message = `Не хватает ${neededCoins} монет`;
  }

  return message;
};

const produceRobot = () => {
  if (!gameStore.canStartProduction()) return;

  gameStore.coins -= gameStore.productionCoins;

  (Object.keys(gameStore.production) as PartKey[]).forEach((part: PartKey) => {
    gameStore.production[part] = gameStore.production[part].map(() => false);
  });

  gameStore.justProduced = true;

  setTimeout(() => {
    gameStore.justProduced = false;
  }, 5000);
};
</script>

<style scoped>
@media (min-width: 768px) and (max-width: 1023px) {
  .produce-button {
    align-items: flex-start;
    flex-direction: column-reverse;
  }

  p {
    margin-top: 20px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .produce-button {
    align-items: flex-start;
    flex-direction: column-reverse;
  }

  p {
    margin-top: 20px;
  }
}

.disabled {
  color: #4c5865;
  border-color: #4c5865;
  cursor: default;
}
</style>
