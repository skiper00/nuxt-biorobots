<template>
    <div class="flex gap-6 grid-wrapper">
        <div class="grid-item flex flex-col items-center">
            <div class="sprite sprite-bio-arm"></div>
            <p class="text-white text-[20px] font-semibold mt-6 name-deatil">Биорука</p>
            <p class="text-[#a3b8cc] mt-[5px]">Стоимость: 7 монет</p>
            <button class="button-gradient text-white px-[69px] py-3 rounded-[60px] mt-6 font-semibold">Установить</button>
        </div>

        <div class="grid-item flex flex-col items-center">
            <div class="sprite sprite-microchip"></div>
            <p class="text-white text-[20px] font-semibold mt-6 name-deatil">Микрочип</p>
            <p class="text-[#a3b8cc] mt-[5px]">Стоимость: 5 монет</p>
            <button class="button-gradient text-white px-[69px] py-3 rounded-[60px] mt-6 font-semibold">Установить</button>
        </div>

        <div class="grid-item center-item flex flex-col items-center">
            <div class="sprite sprite-soul"></div>
            <p class="text-white text-[20px] font-semibold mt-6 name-deatil">Душа</p>
            <p class="text-[#a3b8cc] mt-[5px]">Стоимость: 25 монет</p>
            <button class="button-gradient text-white px-[69px] py-3 rounded-[60px] mt-6 font-semibold">Установить</button>
        </div>
    </div>
</template>


<style scoped>
@media (min-width:1024px) and (max-width:1919px) {
    .name-deatil {
        font-size: 18px;
    }
}

@media (min-width:768px) and (max-width:1023px) {
    .grid-wrapper {
        display: grid;
        grid-auto-columns: repeat(2, 1fr);
    }

    .center-item {
        grid-column: 1/3;
        justify-self: center;
    }
}

@media (min-width:320px) and (max-width:767px) {
.grid-wrapper{
    flex-direction: column;
}
}


.sprite {
    width: 281px;
    height: 268px;
    background-image: url('~/assets/images/css_sprites.png');
    background-repeat: no-repeat;
}

.sprite-bio-arm {
    background-position: -290px 30px;
}

.sprite-microchip {
    background-position: -0 -261.5px;
}

.sprite-soul {
    background-position: -0 25px;
}

.button-gradient {
    background: #FF7F22;
    background: linear-gradient(180deg, rgba(255, 127, 34, 1) 0%, rgba(255, 87, 34, 1) 93%);
}

.button-gradient:hover {
    background: var(--color-hover-button);
}

.button-gradient:active {
    background: var(--color-active-button);
}
</style>
