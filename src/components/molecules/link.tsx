import React from 'react';
import Icon from '@components/atoms/icon.tsx';

interface Props {
	className?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	text?: string;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
	trailing_on_hover?: boolean;
	url?: string;
	active?: boolean;
}

const Link: React.FC<Props> = ({
	className = '',
	leading_icon = '',
	leading_icon_fill = false,
	text = '',
	trailing_icon = '',
	trailing_icon_fill = false,
	trailing_on_hover = false,
	url = '',
	active = false,
}) => {
	return (
		<a
			href={url ? url : '#'}
			className={`group inline-flex items-center gap-5xs min-w-max font-medium ${
				active ? 'text-accent-600 ' : 'text-inherit'
			} ${className} hover:text-accent-400 focus:text-accent-600 active:text-accent-700`}>
			{leading_icon && <Icon name={leading_icon} filled={leading_icon_fill} />}
			{text && <span>{text}</span>}

			{trailing_icon && (
				<Icon
					name={trailing_icon}
					filled={trailing_icon_fill}
					className={`${trailing_on_hover && 'hidden group-hover:inline-flex'}`}
				/>
			)}
		</a>
	);
};

export default Link;
