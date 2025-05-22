<template>
    <div>
        <div class="flex grid-wrapper gap-17 px-6">
            <div class="flex flex-col items-center">
                <p class="text-white text-[20px] font-semibold mt-6 name-deatil">Биорука</p>
                <p class="text-[#a3b8cc] mt-[5px]">Стоимость: 5 монет</p>
                <span class="text-white text-[20px] font-semibold mt-[15px]">2 шт</span>
                <button class="button-gradient px-[81.5px] py-3 mt-6 font-semibold">Продать</button>
            </div>

            <div class="flex flex-col items-center">
                <p class="text-white text-[20px] font-semibold mt-6 name-deatil">Микрочип</p>
                <p class="text-[#a3b8cc] mt-[5px]">Стоимость: 3 монет</p>
                <span class="text-white text-[20px] font-semibold mt-[15px]">3 шт</span>
                <button class="button-gradient px-[81.5px] py-3 mt-6 font-semibold">Продать</button>
            </div>


            <div class="flex center-item flex-col items-center">
                <p class="text-white text-[20px] font-semibold mt-6 name-deatil">Душа</p>
                <p class="text-[#a3b8cc] mt-[5px]">Стоимость: 15 монет</p>
                <span class="text-white text-[20px] font-semibold mt-[15px]">0 шт</span>
                <button class="button-gradient px-[81.5px] py-3 mt-6 font-semibold">Продать</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
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
    .grid-wrapper {
        flex-direction: column;
    }
}

.button-gradient {
    border: #22B3E3 2px solid;
    color: #7CDAF9;
    border-radius: 60px;
}

.button-gradient:hover {
    background-color: #7CDAF9;
    border-color: transparent;
    color: #212529;
    box-shadow: 0 6px 15px 0 rgba(30, 84, 102, 1);
}

.button-gradient:active {
    color: #22b3e3;
    background-color: transparent;
    border: #22B3E3 2px solid;
}
</style>