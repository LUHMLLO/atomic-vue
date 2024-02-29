import React from 'react';
import Icon from '@components/atoms/icon.tsx';
import Text from '@components/atoms/text.tsx';

interface Props {
	text: string;
	className?: string;
	leading_icon?: string;
	leading_icon_fill?: boolean;
	trailing_icon?: string;
	trailing_icon_fill?: boolean;
}

const Tag: React.FC<Props> = ({
	text,
	className,
	leading_icon,
	leading_icon_fill,
	trailing_icon,
	trailing_icon_fill,
}) => {
	return (
		<span
			className={`inline-flex items-center rounded-5xs px-xs py-5xs w-max bg-neutral-200 dark:bg-neutral-800  ${className}`}>
			{leading_icon && <Icon name={leading_icon} filled={leading_icon_fill} />}
			<Text tag='span' text={text} />
			{trailing_icon && (
				<Icon name={trailing_icon} filled={trailing_icon_fill} />
			)}
		</span>
	);
};

export default Tag;
