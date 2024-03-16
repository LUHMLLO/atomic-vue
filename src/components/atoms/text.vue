<script setup lang="ts">
import { allowedTextTags } from '@utils/allowedItems.ts';

interface Props {
	tag: string;
	text: string;
	className?: string;
}

if (!allowedTextTags.includes(tag)) {
		throw new Error(`Invalid or untokenorized tag provided: ${tag}`);
	}

</script>

<template>
	<component :is="text">
		<slot></slot>
	</component>
</template>
