import React, { ChangeEvent } from 'react';
import Icon from '@components/atoms/icon.tsx';
import Text from '@components/atoms/text.tsx';

interface Props {
	borderless?: boolean;
	caption?: string;
	className?: string;
	label?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	type?: string;
	value?: string | number;
}

const Field: React.FC<Props> = ({
	borderless,
	caption,
	className = '',
	label,
	leading_icon,
	leading_icon_fill,
	onChange,
	placeholder,
	trailing_icon,
	trailing_icon_fill,
	type,
	value,
}) => {
	const states_outline = `
		px-xs py-2xs border-solid border-2		
		hover:border-neutral-400 dark:hover:border-neutral-600
		border-neutral-300 dark:border-neutral-700
		active:border-neutral-200 dark:active:border-neutral-800
		focus-within:border-accent-500 dark:focus-within:border-accent-500
	`;

	return (
		<fieldset className='flex flex-col gap-5xs flex-shrink '>
			{label && <Text tag='label' text={label} />}
			<span
				className={`inline-flex items-center gap-5xs rounded-5xs min-w-0 flex-grow max-w-full 
					${borderless ? '' : states_outline}
					${className} 
				`}>
				{leading_icon && (
					<Icon name={leading_icon} filled={leading_icon_fill} />
				)}
				<input
					type={type}
					placeholder={placeholder}
					className='inline-flex flex-grow flex-shrink rounded-0 bg-transparent border-none outline-none max-w-full text-ellipsis overflow-hidden p-0 '
					value={value}
					onChange={onChange}
				/>
				{trailing_icon && (
					<Icon name={trailing_icon} filled={trailing_icon_fill} />
				)}
			</span>
			{caption && <Text tag='small' text={caption} />}
		</fieldset>
	);
};

export default Field;
