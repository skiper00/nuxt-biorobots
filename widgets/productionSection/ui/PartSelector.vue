<template>
    <div class="grid-wrapper">

        <div class="flex flex-col items-center">
            <div class="sprite bg-Group_18"></div>
        </div>
        <div class="flex flex-col items-center">
            <div class="sprite bg-Group_18"></div>
        </div>
        <div class="flex flex-col items-center">
            <div class="sprite bg-Subtract"></div>
            <p class="text-white text-[20px] font-semibold "></p>
        </div>
        <div class="flex flex-col items-center">
            <div class="sprite bg-Subtract_1"></div>
            <p class="text-white text-[20px] font-semibold"></p>
        </div>
        <div class="flex flex-col items-center">
            <div class="sprite bg-Subtract_2"></div>
            <p class="text-white text-[20px] font-semibold"></p>
        </div>

        <div class="flex flex-col items-center">
            <div class="sprite bg-Vector"></div>
            <p class="text-white text-[20px] font-semibold"></p>
        </div>
        <div class="flex flex-col items-center">
            <div class="sprite bg-Vector_1"></div>
            <p class="text-white text-[20px] font-semibold"></p>
        </div>
        <div class="flex flex-col items-center">
            <div class="sprite bg-Vector_1"></div>
            <p class="text-white text-[20px] font-semibold"></p>
        </div>
        <div class="flex flex-col items-center">
            <div class="sprite bg-Vector_2"></div>
            <p class="text-white text-[20px] font-semibold"></p>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:10px
}

.sprite {
    background-image: url('~/assets/images/css_sprites (4).png');
    background-repeat: no-repeat;
}

.bg-Group_18 {
    width: 48px;
    height: 48px;
    background-position: -10px -10px;
}


.bg-Subtract {
    width: 48px;
    height: 48px;
    background-position: -78px -10px;

}

.bg-Subtract_1 {
    width: 48px;
    height: 48px;
    background-position: -10px -78px;
}

.bg-Subtract_2 {
    width: 48px;
    height: 48px;
    background-position: -78px -78px;
}

.bg-Vector {
    width: 48px;
    height: 48px;
    background-position: -146px -78px;
}

.bg-Vector_1 {
    width: 48px;
    height: 48px;
    background-position: -10px -146px;
}

.bg-Vector_2 {
    width: 48px;
    height: 48px;
    background-position: -146px -10px;
}
</style>