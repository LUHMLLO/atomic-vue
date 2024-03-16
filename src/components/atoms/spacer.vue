<script setup lang="ts">
	import { reactive, ref } from 'vue';

	defineProps({
		className: {
			type: String,
		},
		direction: {
			type: String,
		},
	});

	const direction = ref<string>('');

	const baseClasses =
		'align-middle border-none inline-flex flex-shrink min-w-nm';

	const classes = reactive(() => {
		return `${baseClasses}
	            ${direction.value === 'horizontal' ? 'h-5xs w-full' : ''}
	            ${direction.value === 'vertical' ? 'h-full w-5xs' : ''}`;
	});
</script>

<template>
	<hr :class="[classes]" />
</template>
