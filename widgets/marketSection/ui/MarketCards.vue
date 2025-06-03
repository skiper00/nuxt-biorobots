<template>
  <div>
    <div class="flex gap-6 grid-wrapper">
      <div
        v-for="part in Object.keys(gameStore.marketPrices)"
        :key="part"
        :class="{ 'center-item': part === 'soul' }"
        class="grid-item flex flex-col items-center"
      >
        >
        <div v-if="part === 'biomechanism'" class="sprite sprite-bio-arm" />
        <div v-else-if="part === 'processor'" class="sprite sprite-microchip" />
        <div v-else-if="part === 'soul'" class="sprite sprite-soul" />
        <p class="text-white text-[20px] font-semibold mt-6 name-deatil">
          {{ getPartName(part) }}
        </p>
        <p class="text-[#a3b8cc] mt-[5px]">
          Стоимость: {{ gameStore.marketPrices[part] }} монет
        </p>
        <button
          :disabled="gameStore.coins < gameStore.marketPrices[part]"
          class="button-gradient text-white px-[69px] py-3 rounded-[60px] mt-6 font-semibold"
          @click="handleBuy(part)"
        >
          Установить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useActionsStore } from '@/store/actions';
import { useInitialGame } from '@/store/game';
import { ref } from 'vue';

const actionsStore = useActionsStore();

const gameStore = useInitialGame();

type PartKey = 'biomechanism' | 'processor' | 'soul';
const error = ref<string>('');

const getPartName = (part: PartKey) => {
  const names: Record<PartKey, string> = {
    biomechanism: 'Биорука',
    processor: 'Микрочип',
    soul: 'Душа',
  };
  return names[part];
};

const handleBuy = (part: PartKey) => {
  const success = actionsStore.buyPart(part);
  if (!success) {
    error.value = 'Не хватает монет для покупки';
  } else {
    error.value = '';
  }
};
</script>

<style scoped>
@media (min-width: 1024px) and (max-width: 1919px) {
  .name-deatil {
    font-size: 18px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid-wrapper {
    display: grid;
    grid-auto-columns: repeat(2, 1fr);
  }

  .center-item {
    grid-column: 1/3;
    justify-self: center;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .grid-wrapper {
    flex-direction: column;
  }
}

.sprite {
  width: 281px;
  height: 268px;
  background-image: url('~/assets/images/css_sprites.png');
  background-repeat: no-repeat;
}

.sprite-bio-arm {
  background-position: -290px 30px;
}

.sprite-microchip {
  background-position: -0 -261.5px;
}

.sprite-soul {
  background-position: -0 25px;
}

.button-gradient {
  background: #ff7f22;
  background: linear-gradient(
    180deg,
    rgba(255, 127, 34, 1) 0%,
    rgba(255, 87, 34, 1) 93%
  );
}

.button-gradient:hover {
  background: var(--color-hover-button);
}

.button-gradient:active {
  background: var(--color-active-button);
}

.button-gradient:disabled {
  color: #7d90a6;
  background: #4c5865;
}
</style>
