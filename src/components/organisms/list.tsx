import React, { ReactNode } from 'react';
import { allowedLists } from '@utils/allowedItems.ts';

interface Props {
	tag: string;
	className?: string;
	children?: ReactNode;
}

const List: React.FC<Props> = ({ tag, className = '', children }) => {
	if (!allowedLists.includes(tag)) {
		throw new Error(`Invalid or untokenorized tag provided: ${tag}`);
	}

	return React.createElement(tag, { className: className }, children);
};

export default List;
