<template>
    <div class="produce-button flex items-center gap-6">
        <button
            class="w-full max-w-[236px] px-[15.5px] py-[12px] rounded-full border border-2 border-primary-orange text-white font-semibold text-base cursor-pointer">Произвести
            за 10 монет</button>
        <p class="text-[#A3B8CC] text-xs leading-4 max-w-[195px]">Для производства биоробота не хватает 2 биоруки,
            3 микрочипа и 1 души</p>
    </div>
</template>

<style scoped>
@media (min-width:768px) and (max-width:1023px) {
    .produce-button {
        align-items: flex-start;
        flex-direction: column-reverse;
    }
    p{
        margin-top: 20px;
    }
}
@media (min-width:320px) and (max-width:767px) {
    .produce-button {
        align-items: flex-start;
        flex-direction: column-reverse;
    }
    p{
        margin-top: 20px;
    }
}
</style>