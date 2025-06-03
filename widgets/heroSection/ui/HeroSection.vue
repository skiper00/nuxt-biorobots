<template>
  <div class="hero-section flex items-center justify-between">
    <div class="">
      <HeroTitle class="hero-title" />
      <HeroSubtitle class="subtitle" />
    </div>
    <HeroImage />
  </div>
</template>

<style scoped>
@media (min-width: 320px) and (max-width: 767px) {
  .subtitle {
    display: none;
  }

  .hero-section {
    flex-direction: column-reverse;
  }

  .hero-title {
    margin-top: 30px;
  }
}
</style>
