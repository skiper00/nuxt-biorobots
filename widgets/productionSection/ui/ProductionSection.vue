<template>
  <div class="container">
    <div class="main-layout flex items-start gap-6">
      <div class="robots-config-and-parts items-end flex gap-6 mt-10">
        <RobotConfigSelector />
        <PartSelector class="part-selector" />
      </div>
      <RobotPreview />
    </div>
    <ProductionButton />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@media (min-width: 768px) and (max-width: 1023px) {
  .robots-config-and-parts {
    flex-direction: column;
    align-items: normal;
  }

  .part-selector {
    margin-top: 40px;
  }

  .button-and-note-container {
    flex-direction: column-reverse;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .main-layout {
    flex-direction: column-reverse;
  }

  .robots-config-and-parts {
    align-items: normal;
    flex-direction: column;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
