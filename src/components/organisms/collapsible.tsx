import React, { ReactNode } from 'react';
import Icon from '@components/atoms/icon.tsx';
import Text from '@components/atoms/text.tsx';

interface Props {
	text: string;
	className?: string;
	minimal?: boolean;
	leading_icon?: string;
	leading_icon_filled?: boolean;
	children?: ReactNode;
}

const Collapsible: React.FC<Props> = ({
	text,
	className,
	minimal,
	leading_icon,
	leading_icon_filled,
	children,
}) => {
	return (
		<details
			className={`
				flex flex-col gap-1 w-full overflow-hidden rounded-5xs
				${minimal ? '' : 'bg-neutral-100 dark:bg-neutral-900'} 
				${className}
			`}>
			<summary
				className={`flex items-center gap-5xs w-full cursor-pointer ${
					minimal ? '' : 'px-nm py-sm bg-neutral-200 dark:bg-neutral-800'
				}`}>
				{leading_icon && (
					<Icon name={leading_icon} filled={leading_icon_filled} />
				)}
				<Text tag='span' text={text} className='w-full' />
				<Icon name='expand_more' />
			</summary>
			<ul className='flex flex-col gap-5xs p-5xs w-full'>{children}</ul>
		</details>
	);
};

export default Collapsible;
