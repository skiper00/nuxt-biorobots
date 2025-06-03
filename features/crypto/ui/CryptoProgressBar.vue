<template>
  <div class="crypto-container">
    <div class="section-content">
      <div class="coins-progress-bar flex flex-wrap">

        <span v-for="i in gameStore.coins" :key="i" class="-ml-[7px]">
          <NuxtImg class="w-4 mt-2" src="/Coin.png" />
        </span>
      </div>

      <div class="count-coins mt-8 text-[#A3B8CC] text-2xl mb-6">
        <span class="font-bold">{{ gameStore.coins }}</span> biorobo монет
      </div>

      <div class="coin-controls flex items-start gap-[24px]">
        <button
          class="text-primary-orange text-base cursor-pointer transition hover:text-hover-button active:text-active-button"
          @click="handleAddCoins">
          <span
            class="underline decoration-solid decoration-primary-orange hover:decoration-hover-button active:decoration-active-button underline-offset-4">Нацыганить</span>
        </button>
        <label class="flex items-center space-x-2" for="check">
          <input ref="checkboxRef" id="check" type="checkbox" class="custom-checkbox hidden" />
          <div
            class="custom-checkbox-label block w-6 h-6 bg-[#2A343A] border-2 border-[#A3B8CC] flex items-center justify-center text-transparent">
            <span class="check-icon w-4 h-4">
              <NuxtImg src="/check-mark.png" alt="✓" class="w-full h-full object-contain" />
            </span>
          </div>
          <span class="text-white text-base">Нацыганить по 5 монет</span>
        </label>
      </div>
      <InsufficientCoinsModal />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useInitialGame } from '@/store/game';
import { useActionsStore } from '@/store/actions';

const gameStore = useInitialGame();
const actionsStore = useActionsStore();
const checkboxRef = ref<HTMLInputElement | null>(null);

const handleAddCoins = () => {
  const isChecked = checkboxRef.value?.checked;
  const amount = isChecked ? 5 : 1;
  actionsStore.addCoins(amount);
};

</script>

<style scoped>
.custom-checkbox {
  opacity: 0;
  position: absolute;
}

.check-icon {
  background-image: url('/check-mark.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  display: block;
  opacity: 0;
}

.custom-checkbox:checked+.custom-checkbox-label .check-icon {
  opacity: 1;
}

.custom-checkbox-label {
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-checkbox-label .check-icon {
  opacity: 0;
  transition: opacity 0.1s ease;
}

.custom-checkbox:checked+.custom-checkbox-label .check-icon {
  opacity: 1;
}

.custom-checkbox:focus+.custom-checkbox-label,
.custom-checkbox:hover+.custom-checkbox-label {
  border-color: #ff5722;
  background-color: #3a4a50;
}

@media (min-width: 1024px) and (max-width: 1919px) {
  .count-coins {
    font-size: 18px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .coin-controls {
    flex-direction: column;
  }

  .section-content {
    margin: 0 auto 0 auto;
    max-width: 288px;
  }

  .coins-progress-bar {
    margin-top: 40px;
    max-width: 310px;
  }
}
</style>
