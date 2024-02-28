<script setup lang="ts">
	import { onMounted } from 'vue';
	import { useRouter, useRoute } from 'vue-router';

	const router = useRouter();
	const route = useRoute();

	onMounted(() => {
		console.log('router', router);
		console.log('route', route);
	});
</script>

<template>
	<component :is="route.meta.layout">
		<router-view></router-view>
	</component>
</template>
