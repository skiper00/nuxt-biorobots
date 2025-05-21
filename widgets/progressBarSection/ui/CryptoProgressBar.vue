<template>
    <div class="">
        <div class="relative h-15 flex items-center overflow-hidden ">
            <span v-for="i in visbleCoins" :key="i" class="absolute progress-bar"
                :style="{ left: `${(visbleCoins - i) * 7}px`, zIndex: visbleCoins - i + 1 }">
                <NuxtImg class="w-4" src="/Coin.png" />
            </span>
        </div>

        <div class="count-coins text-[#A3B8CC] text-2xl mb-6">
            <span class="font-bold">{{ userCoins }}</span> biorobo
            монет
        </div>

        <div class="coin-controls flex items-center gap-[24px]">
            <button
                class="text-primary-orange text-base cursor-pointer transition hover:text-hover-button active:text-active-button"
                @click="addCoins(1)"><span
                    class="underline decoration-solid decoration-primary-orange hover:decoration-hover-button active:decoration-active-button underline-offset-4">Нацыганить</span></button>
            <label class="flex items-center space-x-2" for="check">
                <input id="check" type="checkbox" class="custom-checkbox hidden" />
                <span
                    class="custom-checkbox-label block w-6 h-6 bg-[#2A343A] border-2 border-[#A3B8CC] flex items-center justify-center text-transparent">
                    <span class="check-icon w-4 h-4">
                        <NuxtImg src="/check-mark.png" alt="✓" class="w-full h-full object-contain" />
                    </span>
                </span>
                <span class="text-white text-base">Нацыганить по 5 монет</span>
            </label>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
const visbleCoins = 45;

const userCoins = ref(45);

const addCoins = (amount: number) => {
    userCoins.value += amount
}
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
    border-color: #FF5722;
    background-color: #3A4A50;
}

@media(min-width:1024px) and (max-width:1919px) {
    .count-coins {
        font-size: 18px;
    }
}

@media(min-width:320px) and (max-width:767px) {
    .coin-controls {
        flex-direction: column;
        display: flex;
        justify-content: left;
    }

    .progress-bar {
        margin: auto;
    }
}
</style>