<template>
  <Teleport to="#teleports">
    <Transition name="modal">
      <div v-if="gameStore.isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        @click="closeModal">
        <div
          class="modal-content relative bg-white rounded-xl shadow-xl pl-[34px] pr-[70px] pt-[33px] pb-[40px] py-6 max-w-[496px] max-h-[288px]"
          @click.stop
          >
          <button class="absolute top-3 right-3 text-orange-500 hover:text-orange-600" @click="closeModal">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="modal-header flex justify-center items-center gap-[29px]">
            <NuxtImg src="/Coin.png" alt="Coin" class="modal-img w-10 h-10 mr-2" />
            <h3 class="modal-text text-[32px] font-semibold text-left leading-[32px]">
              Количество монет
            </h3>
          </div>
          <p class="modal-subtitle text-[20px] text-left text-gray-600 mt-[23px] max-w-[306px] font-semibold ml-[70px]">
            Вы не можете нацыганить более 100 монет biorobo
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, Teleport, watch } from 'vue';
import { useInitialGame } from '@/store/game';

const gameStore = useInitialGame();

const closeModal = () => {
  gameStore.isModalOpen = false;
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (min-width: 320px) and (max-width: 767px) {
  .modal-header {
    flex-direction: column;
    gap: 5px;
  }

  .modal-header .modal-img {
    width: 44px;
    height: 52px;
  }

  button svg {
    width: 32px;
    height: 32px;
  }

  .modal-text {
    max-width: 236px;
    text-align: center;
    font-size: 18px;
  }

  .modal-subtitle {
    font-size: 14px;
    margin: auto;
    text-align: center;
  }

  .modal-content {
    padding: 20px 0px 20px 0px;
    max-width: 236px;
    /* max-height: 210px; */
  }
}
</style>
