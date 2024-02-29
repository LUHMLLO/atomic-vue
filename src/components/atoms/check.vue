<script setup lang="ts">
	import { ref } from 'vue';

	const props = defineProps({
		checked: {
			type: Boolean,
			default: false,
		},
		className: {
			type: String,
			default: '',
		},
		onChange: {
			type: Function,
		},
	});

	const isChecked = ref(props.checked);

	const handleChange = () => {
		isChecked.value = !isChecked.value;
		if (props.onChange) {
			props.onChange(isChecked.value);
		}
	};
</script>

<template>
	<input
		type="checkbox"
		:class="className"
		:checked="isChecked"
		@change="handleChange" />
</template>
