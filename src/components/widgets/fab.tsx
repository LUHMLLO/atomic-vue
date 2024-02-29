import React from 'react';
import Icon from '@components/atoms/icon.tsx';

interface Props {
	active?: boolean;
	borderless?: boolean;
	className?: string;
	filled?: boolean;
	icon?: string;
	onClick?: () => void;
	rounded?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	type?: 'button' | 'reset' | 'submit' | undefined;
}

const Fab: React.FC<Props> = ({
	active = false,
	borderless = false,
	className,
	filled = false,
	icon,
	onClick,
	rounded = false,
	type,
}) => {
	const states_filled = `
		${
			active
				? 'hover:bg-accent-400'
				: 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
		} 
		${
			active
				? 'bg-accent-500 text-accent-50'
				: 'bg-neutral-200 dark:bg-neutral-800'
		} 
		${
			active
				? 'active:bg-accent-600'
				: 'active:bg-neutral-300 dark:active:bg-neutral-900'
		} 
	`;

	const states_hollow = `
		${
			active
				? 'hover:text-accent-400'
				: 'hover:text-neutral-700 dark:hover:text-neutral-100'
		} 
		${
			active
				? 'text-accent-500'
				: 'bg-transparent text-neutral-800 dark:text-neutral-200'
		} 
		${
			active
				? 'active:text-accent-600'
				: 'active:text-neutral-900 dark:active:text-neutral-300'
		} 
	`;

	const states_outline = `outline outline-2
		${
			active
				? 'hover:outline-accent-400 hover:text-accent-400'
				: 'hover:outline-neutral-700 dark:hover:outline-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-100'
		} 
		${
			active
				? 'outline-accent-500 text-accent-500'
				: 'outline-neutral-800 dark:outline-neutral-200 text-neutral-800 dark:text-neutral-200'
		} 
		${
			active
				? 'active:outline-accent-600 active:text-accent-600'
				: 'active:outline-neutral-900 dark:active:outline-neutral-300 active:text-neutral-900 dark:outline-neutral-300'
		} 
	`;

	return (
		<button
			type={type}
			className={`
				inline-flex items-center gap-5xs p-5xs max-w-full   
				${!borderless && !filled && states_outline}
				${borderless && !filled && states_hollow}
				${filled && states_filled}				
				${rounded && 'rounded-5xl'} 
				${className}
			`}
			onClick={onClick}>
			{icon && <Icon name={icon} filled={filled} className='text-xl' />}
		</button>
	);
};

export default Fab;
