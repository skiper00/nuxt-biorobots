<template>
  <div class="bg-[#202529] pt-[48px] min-h-screen">
    <div class="max-w-[1920px] pb-[192px] mx-auto">
      <Header class="mb-[120px] px-[212px] flex justify-between header" />
      <div class="mx-auto max-w-[1016px] sections">
        <HeroSection class="mb-[124px]" />
        <CryptocurrencyWallet class="mb-[100px]" />
        <MarketSection />
        <WareHouse />
        <BioRobotProducePanel />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
@media (min-width: 1024px) and (max-width: 1919px) {
  .header {
    padding: 0 134px 0 134px;
  }

  .sections {
    padding: 0 134px 0 134px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .header {
    padding: 0 136px 0 136px;
  }

  .sections {
    padding: 0 136px 0 136px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .header {
    padding: 0 42px 0 42px;
  }

  .sections {
    padding: 0 42px 0 42px;
  }
}
</style>
