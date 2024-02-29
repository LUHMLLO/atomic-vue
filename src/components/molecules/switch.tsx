import React, { useState } from 'react';
import Styles from '@styles/modules/switch.module.scss';

interface Props {
	checked?: boolean;
	className?: string;
	icon?: string;
	value?: string | number;
}

const Checkbox: React.FC<Props> = ({
	checked = false,
	className = '',
	icon,
	value,
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<input
			x-variant='switch'
			x-icon={icon}
			type='checkbox'
			className={`text-neutral-500 ${className}`}
			style={Styles}
			value={value}
			checked={isChecked}
			onChange={() => setIsChecked(!isChecked)}
		/>
	);
};

export default Checkbox;
