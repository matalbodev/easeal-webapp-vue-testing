<template>
	<div>
		<DashboardContentTitle title="Dashboard" />
		<UiButton text="I'm a random button" />
	</div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'DashboardPage',
	layout: 'dashboard',
})
</script>
