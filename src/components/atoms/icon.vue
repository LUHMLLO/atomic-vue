<script setup lang="ts">
	import { reactive } from 'vue';

	const props = defineProps({
		className: {
			type: String,
			default: '',
		},
		filled: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			default: '',
		},
		onClick: {
			type: Function,
		},
	});

	const isFilled = reactive({
		fontVariationSettings: props.filled ? "'FILL' 1" : "'FILL' 0",
	});
</script>

<template>
	<i
		:class="['material-symbols-rounded', className]"
		:style="isFilled"
		on:click="onClick">
		{name}
	</i>
</template>

<style scoped>
	:host {
		font-variation-settings: isFilled;
	}
</style>
