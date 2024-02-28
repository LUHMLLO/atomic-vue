<template>
	<slot />

	<div className="fixed w-screen h-screen inset-0 isolate z-50 invisible">
		<Notification className="visible" />
	</div>
</template>
