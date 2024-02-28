<template>
	<header
		className="flex flex-col md:flex-row gap-nm items-center justify-between w-full flex-wrap">
		<span
			className="flex flex-col md:flex-row items-center justify-center gap-2xs">
			<Figure
				src="https://vuero.cssninja.io/images/avatars/svg/vuero-1.svg"
				className="w-[3.5rem]" />
			<span className="flex flex-col text-center md:text-left">
				<Text tag="h6" text="{`Welcome" back, ${profileData?.fullname}`} />

				<small className="text-neutral-400">
					We re very happy to see you again on your dashboard
				</small>
			</span>
		</span>

		<span
			className="flex items-center justify-center md:justify-end flex-wrap gap-2xs">
			<Button borderless filled rounded text="View Reports" />
			<Button
				active
				borderless
				filled
				rounded
				text="Manage Shop"
				className="shadow-sm shadow-accent-600" />
		</span>
	</header>
	<section className="flex flex-col gap-2xs">
		<ul className="grid grid-cols-2 md:grid-cols-4 gap-2xs">
			{[ { icon: '', title: 'Total Sales', amount: '$641.1K', }, { icon: '',
			title: 'Total Income', amount: '$389.9K', }, { icon: '', title: 'New
			Order', amount: '371', }, { icon: '', title: 'Abandonned', amount: '29',
			}, ].map((_, index) => (
			<li
				className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-5xs p-nm overflow-hidden"
				key="{index}">
				{index}
			</li>
			))}
		</ul>
		<ul className="grid md:grid-cols-2 gap-2xs">
			{Array.from({ length: 2 }).map((_, index) => (
			<li
				className="aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-5xs p-nm overflow-hidden"
				key="{index}">
				<Chart chartType="line" />
			</li>
			))}
		</ul>
		<ul className="grid md:grid-cols-2 gap-2xs">
			{Array.from({ length: 2 }).map((_, index) => (
			<li
				className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-5xs p-nm overflow-hidden"
				key="{index}">
				<Chart chartType="line" />
			</li>
			))}
		</ul>
		<ul className="grid md:grid-cols-2 gap-2xs">
			{Array.from({ length: 2 }).map((_, index) => (
			<li
				className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-5xs p-nm overflow-hidden"
				key="{index}">
				<Chart chartType="line" />
			</li>
			))}
		</ul>
	</section>
</template>
