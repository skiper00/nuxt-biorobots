<template>
    <div class="grid-wrapper">

        <div class="grid-item flex flex-col items-center">
            <div class="sprite bg-Group_18"></div>
        </div>
        <div class="grid-item flex flex-col items-center">
            <div class="sprite bg-Subtract"></div>
            <p class="text-white text-[20px] font-semibold mt-6"></p>
        </div>
        <div class="grid-item flex flex-col items-center">
            <div class="sprite bg-Subtract_2"></div>
            <p class="text-white text-[20px] font-semibold mt-6"></p>
        </div>

    
        <div class="grid-item flex flex-col items-center">
            <div class="sprite bg-Vector"></div>
            <p class="text-white text-[20px] font-semibold mt-6"></p>
        </div>
        <div class="grid-item flex flex-col items-center">
            <div class="sprite bg-Vector_1"></div>
            <p class="text-white text-[20px] font-semibold mt-6"></p>
        </div>
        <div class="grid-item flex flex-col items-center">
            <div class="sprite bg-Vector_2"></div>
            <p class="text-white text-[20px] font-semibold mt-6"></p>
        </div>


        <div class="grid-item center-item flex flex-col items-center">
            <div class="sprite bg-Vector_2"></div>
            <p class="text-white text-[20px] font-semibold mt-6"></p>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.sprite {
    background-image: url('~/assets\images\css_sprites (3).png');
    background-repeat: no-repeat;
}

.bg-Group_18 {
    width: 32px;
    height: 32px;
    background-position: -10px -10px;
}

.bg-Subtract {
    width: 36px;
    height: 24px;
    background-position: -62px -10px;
}

.bg-Subtract_1 {
    width: 36px;
    height: 24px;
    background-position: -10px -62px;
}

.bg-Subtract_2 {
    width: 36px;
    height: 24px;
    background-position: -118px -10px;
}

.bg-Vector {
    width: 24px;
    height: 24px;
    background-position: -118px -54px;
}

.bg-Vector_1 {
    width: 24px;
    height: 24px;
    background-position: -66px -62px;
}

.bg-Vector_2 {
    width: 24px;
    height: 24px;
    background-position: -10px -106px;
}
</style>