<template>
  <div class="robot-sprite" :style="{ backgroundPosition: spritePosition }" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useInitialGame } from '@/store/game';

const gameStore = useInitialGame();

const spritePosition = computed(() => {
  const { type, gender } = gameStore.robotConfig;
  if (gameStore.justProduced) {
    if (type === 'FrontEnd' && gender === 'Male') return '-236px -640px';
    if (type === 'FrontEnd' && gender === 'Female') return '0px -640px';
    if (type === 'Design' && gender === 'Male') return '-944px -320px';
    if (type === 'Design' && gender === 'Female') return '-944px 0px';
  } else if (gameStore.hasEnoughParts) {
    if (type === 'FrontEnd' && gender === 'Male') return '-708px 0px';
    if (type === 'FrontEnd' && gender === 'Female') return '-708px -320px';
    if (type === 'Design' && gender === 'Male') return '0px 0px';
    if (type === 'Design' && gender === 'Female') return '-472px -320px';
  } else {
    if (type === 'FrontEnd' && gender === 'Male') return '0px -320px';
    if (type === 'FrontEnd' && gender === 'Female') return '-472px 0px';
    if (type === 'Design' && gender === 'Male') return '-236px 0px';
    if (type === 'Design' && gender === 'Female') return '-236px -320px';
  }
  return '0px 0px';
});
</script>

<style scoped>
.robot-sprite {
  width: 236px;
  height: 320px;
  background-image: url('@/assets/images/css_sprites (8).png');
  background-repeat: no-repeat;
}
</style>
