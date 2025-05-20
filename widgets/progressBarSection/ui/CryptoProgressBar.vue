<template>
    <div class="">
        <div class="relative h-15 flex items-center">
            <span 
            v-for="i in visbleCoins" 
            :key="i" class="absolute" 
            :style="{ left: `${((i - 1) * 7)}px`, zIndex: i,}"
            >
                <NuxtImg class="w-4" src="/Coin.png" />
            </span>
        </div>

        <div class="count-coins text-[#A3B8CC] text-2xl mb-6"><span class="font-bold">{{ userCoins }}</span> biorobo монет</div>

        <div class="flex items-center gap-[24px]">
            <button class="text-primary-orange text-base cursor-pointer transition hover:text-hover-button active:text-active-button" @click="addCoins(1)"><span class="underline decoration-solid decoration-primary-orange hover:decoration-hover-button active:decoration-active-button underline-offset-4">Нацыганить</span></button>
            <label class="flex items-center space-x-2" for="check">
                <input id="check" type="checkbox" />
                <span class="text-white text-base">Нацыганить по 5 монет</span>
            </label>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
const visbleCoins = 45;

const userCoins = ref(45)

const addCoins = (amount:number) => {
    userCoins.value += amount
}
</script>


<style>
@media(min-width:1024px) and (max-width:1919px){
.count-coins{
    font-size: 18px;
}
}
</style>