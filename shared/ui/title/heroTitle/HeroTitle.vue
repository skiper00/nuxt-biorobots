<template>
  <div class="hero-heading">
    <p class="title text-white font-semibold text-[56px]">
      Фабрика по производству биороботов
    </p>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) and (max-width: 1919px) {
  .title {
    font-size: 48px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .title {
    font-size: 32px;
  }
  .hero-heading {
    max-width: 259px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .title {
    text-align: center;
    font-size: 28px;
  }
  .hero-heading {
    max-width: 236px;
  }
}
</style>
