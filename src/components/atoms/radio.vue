<script setup lang="ts">
	defineProps({
		className: {
			type: String,
			default: '',
		},
		checked: {
			type: Boolean,
			default: false,
		},
		groupName: {
			type: String,
			default: '',
		},
		onChange: {
			type: Function,
		},
	});
</script>

<template>
	<input
		x-variant="radio"
		type="radio"
		:class="[className]"
		name="{groupName}"
		:checked="checked"
		on:change="onChange" />
</template>

<style lang="scss">
	@use '../../commons/styles/modules/radio.scss';
</style>
