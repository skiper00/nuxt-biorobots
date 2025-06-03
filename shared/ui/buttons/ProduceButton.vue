<template>
  <div>
    <button
      :disabled="!gameStore.canStartProduction()"
      class="px-[18px] py-[12px] rounded-full border border-2 border-primary-orange text-white font-semibold text-base hover:bg-hover-button hover:border-transparent active:bg-active-button disabled:text-[#4C5865] disabled:border-[#4C5865] enabled:hover:bg-hover-button disabled:hover:bg-transparent"
    >
      Произвести биороба
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useInitialGame } from '@/store/game';

const gameStore = useInitialGame();
</script>
