<script setup lang="ts">
	import BaseLayout from '@layouts/_.vue';
</script>

<template>
	<BaseLayout>
		<div className="flex w-screen h-screen isolate">
			<aside
				className="relative hidden md:inline-flex items-center justify-center flex-grow bg-neutral-100 dark:bg-neutral-950 z-10 overflow-hidden">
				<Figure
					src="https://vuero.cssninja.io/assets/station-d05ed495.svg"
					className="h-full max-h-[40rem] m-auto absolute inset-auto" />
			</aside>
			<main
				className="flex items-center justify-center flex-grow md:max-w-[40rem] h-screen bg-neutral-50 dark:bg-neutral-900 z-20 isolate overflow-hidden shadow-2xl shadow-neutral-200 dark:shadow-none">
				<slot />
			</main>
		</div>
	</BaseLayout>
</template>
