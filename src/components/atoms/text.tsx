import React from 'react';
import { allowedTextTags } from '@utils/allowedItems.ts';

interface Props {
	tag: string;
	text: string;
	className?: string;
}

const Text: React.FC<Props> = ({ tag, text, className = '' }) => {
	if (!allowedTextTags.includes(tag)) {
		throw new Error(`Invalid or untokenorized tag provided: ${tag}`);
	}

	return React.createElement(tag, { className: className }, text);
};

export default Text;
