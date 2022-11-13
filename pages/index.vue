<template>
  <div>
    <layout-navbar />
    <hero />
    <div class="columns-3">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
    <cta-need-help />
    <testimonials />
    <contact />
    <layout-footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Industrial Webworks',

  meta: [
    {
      name: 'Industrial Webworks',
      content: 'Industrial Webworks owned and operated in Florida, USA'
    }
  ],
})
</script>
