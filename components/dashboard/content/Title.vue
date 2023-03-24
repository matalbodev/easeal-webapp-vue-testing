<template>
  <h1 class="text-5xl font-bold mb-8">{{ title }}</h1>
</template>
<script lang="ts">
export default {
  name: 'DashboardContentTitle',
  layout: 'dashboard',
  props: {
    title: {
      type: String,
      default: 'I\'m a title',
    },
  }
}
</script>