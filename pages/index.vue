<template>
    <div class="bg-[#202529] pt-[48px] h-screen">
        <div class="max-w-[1920px] mx-auto">
            <Header class="mb-[120px] px-[212px] flex justify-between header"/>
            <div class="max-w-[1016px] mx-auto sections">
            <HeroSection class="mb-[124px]"/>
            <CryptocurrencyWallet />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>


<style>
@media (min-width: 1024px) and (max-width:1919px){
.header{
    padding: 0 134px 0 134px;
}
.sections{
    padding: 0 134px 0 134px;
}
}
</style>