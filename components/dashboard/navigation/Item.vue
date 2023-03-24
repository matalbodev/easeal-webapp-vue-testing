<template>
	<li>
		<NuxtLink
			class="text-md flex items-center border-l-4 px-10 py-6 font-semibold transition-colors hover:bg-neutral-200"
			:to="href"
		>{{ label }}</NuxtLink>
	</li>
</template>
<script lang="ts">
export default {
	name: 'NavigationItem',
	props: {
		href: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
	},
}
</script>
