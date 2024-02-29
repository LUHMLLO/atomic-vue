import React from 'react';
import Radio from '@components/atoms/radio.tsx';
import Text from '@components/atoms/text.tsx';

interface Props {
	groupName: string;
	text: string;
	checked?: boolean;
	className?: string;
}

const Radiobox: React.FC<Props> = ({ groupName, text, checked, className }) => {
	return (
		<fieldset
			className={`inline-flex items-center gap-5xs flex-shrink ${className}`}>
			<Radio groupName={groupName} checked={checked} />
			<Text tag='label' text={text} />
		</fieldset>
	);
};

export default Radiobox;
