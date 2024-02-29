import React from 'react';
import Icon from '@components/atoms/icon.tsx';
import Text from '@components/atoms/text.tsx';

interface Props {
	text: string;
	variant: string;
	className?: string;
	filled?: boolean;
}

const Badge: React.FC<Props> = (props) => {
	return (
		<span
			className={`inline-flex items-center rounded-5xs p-5xs w-max bg-neutral-200 dark:bg-neutral-800 ${props.className}`}>
			{props.variant === 'icon' && (
				<Icon name={props.text} filled={props.filled} />
			)}

			{props.variant === 'text' && (
				<Text tag='span' text={props.text} className='text-2xs' />
			)}
		</span>
	);
};

export default Badge;
