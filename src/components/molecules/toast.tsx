import React from 'react';
import Icon from '@components/atoms/icon.tsx';
import Text from '@components/atoms/text.tsx';

interface Props {
	text: string;
	className?: string;
}

const Toast: React.FC<Props> = ({ text, className }) => {
	return (
		<span
			className={`inline-flex items-center justify-center gap-5xs p-5xs rounded-5xs bg-amber-300 text-amber-950 max-w-full ${className}`}>
			<Icon name='warning' />
			<Text
				tag='span'
				text={text}
				className='whitespace-nowrap overflow-ellipsis overflow-hidden'
			/>
			<Icon name='close' />
		</span>
	);
};

export default Toast;
