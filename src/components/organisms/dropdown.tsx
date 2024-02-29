import React, { ReactNode } from 'react';
import {
	useFloating,
	autoUpdate,
	offset,
	shift,
	limitShift,
	flip,
	Placement,
} from '@floating-ui/react-dom';
import Icon from '@components/atoms/icon.tsx';

interface Props {
	active?: boolean;
	borderless?: boolean;
	className?: string;
	filled?: boolean;
	menuClassName?: string;
	leading_icon?: string;
	leading_icon_filled?: boolean;
	paddingless?: boolean;
	rounded?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_filled?: boolean;
	children?: ReactNode;
	figure?: ReactNode;
	position?: Placement | undefined;
}

const Dropdown: React.FC<Props> = ({
	active = false,
	borderless = false,
	className,
	filled = false,
	menuClassName,
	leading_icon,
	leading_icon_filled,
	paddingless,
	rounded = false,
	text,
	trailing_icon,
	trailing_icon_filled,
	children,
	figure,
	position = 'bottom',
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

	const { refs, floatingStyles } = useFloating({
		placement: position,
		middleware: [
			offset(6),
			flip({
				padding: 24,
			}),
			shift({
				limiter: limitShift(),
			}),
		],
		whileElementsMounted: autoUpdate,
	});

	return (
		<details
			ref={refs.setReference}
			className={`relative inline-flex flex-col gap-5xs ${className}`}>
			<summary
				className={`
				flex items-center gap-5xs min-w-full max-w-max cursor-pointer  
				
				${!borderless && !filled && states_outline}
				${borderless && !filled && states_hollow}
				${filled && states_filled}	
				
				${rounded && 'rounded-5xs'}
				${!paddingless && (text ? 'px-xs py-2xs' : 'p-5xs')}
				${className}
			`}>
				{leading_icon && (
					<Icon name={leading_icon} filled={leading_icon_filled} />
				)}
				{figure}

				{text && <span className='w-full'>{text}</span>}

				{trailing_icon && (
					<Icon name={trailing_icon} filled={trailing_icon_filled} />
				)}
			</summary>
			<ul
				ref={refs.setFloating}
				style={floatingStyles}
				className={`flex flex-col min-w-full max-w-max bg-neutral-100 dark:bg-neutral-800 whitespace-nowrap shadow-lg shadow-neutral-500 dark:shadow-neutral-950 ${
					rounded && 'rounded-5xs'
				} ${menuClassName}`}>
				{children}
			</ul>
		</details>
	);
};

export default Dropdown;
