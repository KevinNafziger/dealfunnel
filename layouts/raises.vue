<template>
  <div class="layout-d">
  <TheHeader />
  <Visits />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import Visits from '@/components/Visits/Visits';

export default {

  components: {
  TheHeader,
  Visits
  },
}
</script>

<style>
.layout-d {
  background: #f1f1f1fa;
}
</style>
