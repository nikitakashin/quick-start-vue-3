<template>
  <div class="layout-default">
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
};
</script>

<script setup>
import AppFooter from '~/components/app/AppFooter.vue';
import AppHeader from '~/components/app/AppHeader.vue';
</script>
