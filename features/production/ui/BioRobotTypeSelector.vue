<template>
  <div>
    <h3 class="text-white text-lg mb-4">Тип биоробота:</h3>
    <div class="flex">
      <label class="flex items-center gap-2">
        <input
          v-model="gameStore.robotConfig.type"
          type="radio"
          name="bioType"
          value="FrontEnd"
          class="custom-radio hidden"
        />
        <span
          class="custom-radio-label block w-6 h-6 bg-[#2A343A] border-2 border-[#A3B8CC] rounded-full flex items-center justify-center"
        >
          <span class="radio-dot w-4 h-4 bg-[#FF5722] rounded-full opacity-0" />
        </span>
        <span class="text-white text-xs">FrontEnd</span>
      </label>

      <label class="flex items-center gap-2 ml-[27px]">
        <input
          v-model="gameStore.robotConfig.type"
          type="radio"
          name="bioType"
          value="Design"
          class="custom-radio hidden"
        />
        <span
          class="custom-radio-label block w-6 h-6 bg-[#2A343A] border-2 border-[#A3B8CC] rounded-full flex items-center justify-center"
        >
          <span class="radio-dot w-4 h-4 bg-[#FF5722] rounded-full opacity-0" />
        </span>
        <span class="text-white text-xs">Design</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInitialGame } from '../../../store/game';

const gameStore = useInitialGame();
</script>

<style scoped>
.custom-radio {
  opacity: 0;
  position: absolute;
}

.custom-radio-label {
  cursor: pointer;
  transition: all 0.3s ease;
}

.radio-dot {
  transition: opacity 0.1s ease;
}

.custom-radio:checked + .custom-radio-label .radio-dot {
  opacity: 1;
}

.custom-radio:focus + .custom-radio-label,
.custom-radio:hover + .custom-radio-label {
  border-color: #ff5722;
  background-color: #3a4a50;
}
</style>
