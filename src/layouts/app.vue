<script setup lang="ts">
	import BaseLayout from '@layouts/_.vue';
</script>

<template>
	<BaseLayout>
		<div className="flex items-center w-screen h-screen overflow-hidden">
			<Sidebar />
			<main className="flex flex-col w-full h-screen overflow-y-auto">
				<div
					className="flex flex-col w-full gap-2xl p-2xl md:max-w-[56rem] lg:max-w-[88%] mx-auto isolate">
					<Navbar />
					{children}
				</div>
				{/*
				<Fab
					icon="menu"
					active
					filled
					rounded
					className="fixed top-0 right-0 mt-xs mr-nm p-nm shadow-sm shadow-accent-600" />
				*/}
			</main>
		</div>
	</BaseLayout>
</template>
