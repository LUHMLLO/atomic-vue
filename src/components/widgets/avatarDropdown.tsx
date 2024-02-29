import React from 'react';
import { useStore } from '@nanostores/react';

import { $setToken } from '@api/token.ts';
import { $profile } from '@api/profile.ts';

import Dropdown from '@components/organisms/dropdown.tsx';
import Figure from '@components/atoms/figure.tsx';
import Link from '@components/molecules/link.tsx';
import Button from '@components/molecules/button.tsx';
import { Placement } from '@floating-ui/react-dom';

interface Props {
	className?: string;
	position?: Placement | undefined;
}

const AvatarDropdown: React.FC<Props> = ({ className, position = 'right' }) => {
	const profile = useStore($profile);

	return (
		<Dropdown
			borderless
			className={className}
			figure={
				<Figure
					src='https://vuero.cssninja.io/images/avatars/svg/vuero-1.svg'
					className='w-[2rem] md:w-[2.5rem]'
				/>
			}
			menuClassName='gap-5xs p-5xs'
			paddingless
			position={position}
			rounded>
			<header className='flex items-center gap-sm p-nm bg-neutral-200 dark:bg-neutral-600 rounded-5xs'>
				<Figure
					src='https://vuero.cssninja.io/images/avatars/svg/vuero-1.svg'
					className='w-[4rem]'
				/>
				<div>
					<p className='font-semibold'>{profile?.fullname}</p>
					<p>
						<small className='text-neutral-600 dark:text-neutral-300 font-semibold'>
							{profile?.email}
						</small>
					</p>
				</div>
			</header>
			<Link
				leading_icon='person'
				text='Profile'
				url='/#/profile'
				className='p-5xs'
			/>
			<hr className='block w-full h-3 bg-neutral-200 dark:bg-neutral-700 border-none' />
			<Link leading_icon='work' text='Projects' className='p-5xs' />
			<Link leading_icon='group' text='Team' className='p-5xs' />
			<hr className='block w-full h-3 bg-neutral-200 dark:bg-neutral-700 border-none' />
			<Link
				leading_icon='settings'
				text='Settings'
				url='/#/settings'
				className='p-5xs'
			/>
			<hr className='block w-full h-3 bg-neutral-200 dark:bg-neutral-700 border-none' />
			<Button
				active
				rounded
				borderless
				filled
				leading_icon='logout'
				text='Log Out'
				onClick={() => $setToken(null)}
			/>
		</Dropdown>
	);
};

export default AvatarDropdown;
