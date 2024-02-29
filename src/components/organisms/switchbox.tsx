import React from 'react';
import Text from '@components/atoms/text.tsx';
import Switch from '@components/molecules/switch.tsx';

interface Props {
	checked?: boolean;
	className?: string;
	label?: string;
	value?: string | number;
}

const Checkbox: React.FC<Props> = ({
	checked = false,
	className = '',
	label = '',
	value,
}) => {
	return (
		<fieldset
			className={`flex items-center gap-5xs min-w-max max-w-full ${className}`}>
			<Switch value={value} checked={checked} />
			<Text tag='label' text={label} className='flex-shrink-0 min-w-max' />
		</fieldset>
	);
};

export default Checkbox;
