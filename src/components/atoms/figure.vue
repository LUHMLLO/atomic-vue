<script setup lang="ts">
	defineProps({
		alt: {
			type: String,
			default: '',
		},
		className: {
			type: String,
			default: '',
		},
		src: {
			type: String,
			default: '',
		},
		onClick: {
			type: Function,
		},
	});
</script>

<template>
	<figure
		:class="[
			'inline-flex items-center flex-shrink-0 overflow-hidden rounded-5xs ',
			className,
		]"
		on:click="{onClick}">
		<img :src="src" :alt="alt" className="inset-0 object-cover w-full h-full" />
	</figure>
</template>
