<template>
  <div>
    <div class="flex grid-wrapper gap-17 px-6">
      <article
        v-for="(detail, part) in gameStore.wareHouse"
        :key="part"
        :class="{ 'center-item': part === 'soul' }"
        class="flex flex-col items-center"
      >
        <p class="text-white text-[20px] font-semibold mt-6 name-deatil">
          {{ getPartName(part) }}
        </p>
        <p class="text-[#a3b8cc] mt-[5px]">
          Стоимость: {{ detail.sellPrice }} монет
        </p>
        <div class="text-white text-[20px] font-semibold mt-[15px]"
          >{{ detail.count }} шт</div>
        <button
          :disabled="detail.count === 0"
          class="button-gradient px-[81.5px] py-3 mt-6 font-semibold"
          @click="actionsStore.sellPart(part)"
        >
          Продать
        </button>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInitialGame } from '@/store/game';
import { useActionsStore } from '@/store/actions';

type PartKey = 'biomechanism' | 'processor' | 'soul';

const gameStore = useInitialGame();
const actionsStore = useActionsStore();

const getPartName = (part: PartKey) => {
  const names: Record<PartKey, string> = {
    biomechanism: 'Биорука',
    processor: 'Микрочип',
    soul: 'Душа',
  };
  return names[part];
};
</script>

<style scoped>
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

.button-gradient {
  border: #22b3e3 2px solid;
  color: #7cdaf9;
  border-radius: 60px;
}

.button-gradient:hover {
  background-color: #7cdaf9;
  border-color: transparent;
  color: #212529;
  box-shadow: 0 6px 15px 0 rgba(30, 84, 102, 1);
}

.button-gradient:active {
  color: #22b3e3;
  background-color: transparent;
  border: #22b3e3 2px solid;
}

.button-gradient:disabled {
  color: #4c5865;
  border-color: #4c5865;
  cursor: cursor-not-allowed;
  box-shadow: none;
  background-color: transparent;
}
</style>
