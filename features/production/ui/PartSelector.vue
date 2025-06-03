<template>
  <div class="grid-wrapper">
    <div
      v-for="{ type, slot } in parts"
      :key="type + '-' + slot"
      class="flex flex-col items-center"
      @click="togglePart(type, slot)"
    >
      <div class="sprite" :class="getPartClass(type, slot)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useInitialGame } from '@/store/game';
import type { PartKey } from '@/store/game';

const gameStore = useInitialGame();
const parts = [
  { type: 'biomechanism', slot: 1 },
  { type: 'biomechanism', slot: 2 },
  { type: 'biomechanism', slot: 3 },
  { type: 'biomechanism', slot: 4 },
  { type: 'processor', slot: 1 },
  { type: 'processor', slot: 2 },
  { type: 'processor', slot: 3 },
  { type: 'processor', slot: 4 },
  { type: 'soul', slot: 1 },
] as const;

const classMap = {
  biomechanism: {
    added: 'bg-Group_18',
    inWarehouse: 'bg-Subtract',
    notInWarehouse: 'bg-Subtract_1',
  },
  processor: {
    added: 'bg-Subtract_2',
    inWarehouse: 'bg-Vector',
    notInWarehouse: 'bg-Vector_1',
  },
  soul: {
    added: 'bg-Vector_3',
    inWarehouse: 'bg-Vector_2',
    notInWarehouse: 'bg-Vector_4',
  },
};

const getPartClass = (part: PartKey, slot: number) => {
  const index = slot - 1;

  if (gameStore.production[part][index]) {
    return classMap[part].added;
  } else if (gameStore.wareHouse[part].count > 0) {
    return classMap[part].inWarehouse;
  } else {
    return classMap[part].notInWarehouse;
  }
};

const togglePart = (part: PartKey, slot: number) => {
  const index = slot - 1;

  if (!gameStore.production[part][index]) {
    if (gameStore.wareHouse[part].count > 0) {
      gameStore.production[part][index] = true;
      gameStore.wareHouse[part].count -= 1;
    }
  } else {
    gameStore.production[part][index] = false;
    gameStore.wareHouse[part].count += 1;
  }
};
</script>

<style scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.sprite {
  width: 48px;
  height: 48px;
  background-image: url('~/assets/images/css_sprites (6).png');
  background-repeat: no-repeat;
}

.bg-Group_18 {
  background-position: -146px -10px;
}

.bg-Subtract {
  background-position: -146px -78px;
}

.bg-Subtract_1 {
  background-position: -10px -146px;
}

.bg-Subtract_2 {
  background-position: -10px -10px;
}

.bg-Vector {
  background-position: -10px -78px;
}

.bg-Vector_1 {
  background-position: -78px -78px;
}

.bg-Vector_2 {
  background-position: -78px -10px;
}

.bg-Vector_3 {
  background-position: -78px -146px;
}

.bg-Vector_4 {
  background-position: -146px -146px;
}
</style>
