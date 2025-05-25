<template>
    <div class="grid-wrapper">
        <div v-for="(item, index) in spriteItems" :key="index" class="flex flex-col items-center">
            <div class="sprite" :class="item.bgClass"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const spriteItems = [
    { bgClass: 'bg-Group_18' },
    { bgClass: 'bg-Group_18' },
    { bgClass: 'bg-Subtract' },
    { bgClass: 'bg-Subtract_1' },
    { bgClass: 'bg-Subtract_2' },
    { bgClass: 'bg-Vector', },
    { bgClass: 'bg-Vector_1' },
    { bgClass: 'bg-Vector_1' },
    { bgClass: 'bg-Vector_2' },
]

</script>

<style scoped>
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px
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