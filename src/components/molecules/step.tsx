import React from 'react';
import Icon from '@components/atoms/icon.tsx';
import Text from '@components/atoms/text.tsx';
import Spacer from '@components/atoms/spacer.tsx';

interface Props {
	text: string;
	hasBar: boolean;
	done?: boolean;
	className?: string;
}

const ListItem: React.FC<Props> = ({ text, hasBar, done, className }) => {
	return (
		<li
			className={`flex items-center gap-5xs overflow-hidden whitespace-nowrap ${className}`}>
			<Icon
				name='check_circle'
				filled={done}
				className={done ? 'text-accent-600' : 'text-accent-900'}
			/>

			<Text tag='label' text={text} className='whitespace-nowrap' />

			{hasBar && (
				<Spacer
					direction='horizontal'
					className={done ? 'bg-accent-600' : 'bg-accent-900'}
				/>
			)}
		</li>
	);
};

export default ListItem;
