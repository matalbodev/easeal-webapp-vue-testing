<template>
	<div class="flex min-h-screen flex-wrap">
		<div class="w-1/5 shrink-0 bg-neutral-100 pb-10">
			<div class="bg-easeal px-10 py-8">
				<h1 class="text-4xl font-semibold text-white">Easeal</h1>
				<p class="text-white">Your easy meal planner</p>
			</div>
			<DashboardNavigationList />
		</div>
		<div class="w-full flex-1 bg-neutral-50 p-16">
			<Nuxt />
		</div>
	</div>
</template>
