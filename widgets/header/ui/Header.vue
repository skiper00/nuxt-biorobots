<template>
    <div 
    class="flex items-center justify-between">
        <LogoHeader class="logo" />
        <ProduceButton class="produce-btn"/>
    </div>
</template>


<style>
@media(min-width:320px) and (max-width:767px) {
    .logo {
        display: none;
    }
    .produce-btn{
        margin: auto;
    }
}
</style>