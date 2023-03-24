<template>
	<ul>
		<DashboardNavigationItem v-for="link in links" :key="link.href" :href="link.href" :label="link.label" />
	</ul>
</template>
<script lang="ts">
const links = [
	{
		href: '/dashboard',
		label: 'Calendar',
	},
	{
		href: '/dashboard/meals',
		label: 'Your meals',
	},
	{
		href: '/dashboard/ingredients',
		label: 'Ingredients',
	},
]
export default {
	name: 'NavigationList',
	props: {
		items: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			links,
		}
	},
}
</script>
