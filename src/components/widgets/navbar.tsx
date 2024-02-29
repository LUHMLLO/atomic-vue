import React from 'react';
import Button from '@components/molecules/button.tsx';
import ThemeToggle from '@components/widgets/themetoggle.tsx';
import { $settings, $toggleSidebar } from '@stores/settings.ts';
import { useStore } from '@nanostores/react';
import AvatarDropdown from '@components/widgets/avatarDropdown.tsx';
import Figure from '@components/atoms/figure.tsx';

interface Props {}

export const Navbar: React.FC<Props> = () => {
	const settings = useStore($settings);

	return (
		<>
			<nav className='flex items-center justify-between sticky md:relative top-0 bg-neutral-50 dark:bg-neutral-950 py-xs z-50'>
				<nav className='flex items-center'>
					<Button
						filled
						rounded
						leading_icon={
							settings.sidebar === 'hide'
								? 'left_panel_open	'
								: 'left_panel_close'
						}
						onClick={() => $toggleSidebar()}
					/>
				</nav>
				<Figure src='/vite.svg' className='w-[2.5rem] md:hidden' />
				<nav className='flex items-center justify-end gap-5xs'>
					<ThemeToggle />
					<Button paddingless leading_icon='notifications' rounded borderless />
					<AvatarDropdown position='bottom' className='md:hidden my-auto' />
				</nav>
			</nav>
		</>
	);
};
