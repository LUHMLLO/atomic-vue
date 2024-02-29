import { $profile } from '@api/profile.ts';
import { useStore } from '@nanostores/react';
import React from 'react';
import Link from '@components/molecules/link.tsx';
import Figure from '@components/atoms/figure.tsx';
import AvatarDropdown from './avatarDropdown.tsx';
import { $settings, $toggleSidebar } from '@stores/settings.ts';

interface Props {}

const Rail: React.FC<Props> = () => {
	return (
		<>
			<aside className='flex flex-col items-center gap-5xl px-nm py-2xl flex-shrink-0 w-max h-full bg-neutral-100 dark:bg-neutral-800'>
				<nav className='hidden md:flex flex-col flex-grow items-center justify-end'>
					<Figure src='/vite.svg' className='w-[2.5rem]' />
				</nav>
				<nav className='flex flex-col gap-5xl h-full'>
					<Link
						url='/#/dashboard'
						leading_icon='dashboard'
						className=' cursor-pointer hover:text-accent-500'
					/>
				</nav>
				<AvatarDropdown className='hidden md:inline-flex' />
			</aside>
		</>
	);
};

const Pane_Menu: React.FC<Props> = () => {
	const profileData = useStore($profile);

	// function hashlink(link: string): string {
	// 	return `#/${link.toLocaleLowerCase()}`;
	// }

	// function hashlink(link: string): string {
	// 	switch (link.toLocaleLowerCase()) {
	// 		case 'usuarios':
	// 			return '/#/users';
	// 		case 'mis datos':
	// 			return '/#/profile';
	// 		default:
	// 			return '/';
	// 	}
	// }

	return (
		<>
			<aside className='inline-flex flex-col gap-xl p-2xl h-full min-w-0 w-[14rem] bg-neutral-200 dark:bg-neutral-900'>
				<h1>{profileData?.fullname}</h1>
				{/* {profileData?.menues?.map((menu) => (
					<React.Fragment key={menu.idmenu}>
						<header className='flex items-center gap-5xs'>
							<h6>{menu.nombremenu}</h6>
						</header>
						<hr className='block w-full h-3 bg-neutral-200 dark:bg-neutral-800 border-none' />
						{menu.children && menu.children.length > 0 && (
							<section className='flex flex-col gap-5xs flex-grow w-full'>
								{menu.children.map((m, i) => (
									<Link
										text={m.nombremenu}
										url={hashlink(m.nombremenu)}
										key={i}
										trailing_icon='arrow_forward'
										trailing_on_hover
										className='justify-between py-5xs border-b-2 border-transparent hover:border-neutral-300 dark:hover:border-neutral-800 w-full'
									/>
								))}
							</section>
						)}
					</React.Fragment>
				))} */}
			</aside>
		</>
	);
};

export const Sidebar: React.FC<Props> = () => {
	const settings = useStore($settings);

	return (
		<>
			<aside
				className={`${
					settings.sidebar === 'hide' ? 'hidden' : 'flex'
				} md:flex flex-shrink-0 w-max h-full fixed md:relative top-0 left-0 z-50`}>
				<Rail />
				{settings.sidebar === 'show' && <Pane_Menu />}
			</aside>

			{settings.sidebar === 'show' && (
				<div
					className='md:hidden fixed w-screen h-screen bg-neutral-950 opacity-80 cursor-pointer z-40'
					onClick={() => $toggleSidebar()}
				/>
			)}
		</>
	);
};
