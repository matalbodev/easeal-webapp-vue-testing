<template>
  <div>
    <DashboardContentTitle title="Ingredients list" />
    <UiButton text="I'm a random button" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'DashboardIngredientsPage',
  layout: 'dashboard',
  props: {
    title: {
      type: String,
      default: 'Ingredients',
    },
  }
}
</script>