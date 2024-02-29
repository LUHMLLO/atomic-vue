import React, { useState } from 'react';
import Styles from '@styles/modules/radio.module.scss';

interface Props {
	groupName: string;
	checked?: boolean;
	className?: string;
}

const Radio: React.FC<Props> = ({
	groupName = '',
	checked = false,
	className = '',
}) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<input
			x-variant='radio'
			type='radio'
			className={`${className} ${Styles}`}
			name={groupName}
			checked={isChecked}
			onChange={() => {
				setIsChecked(!isChecked);
			}}
		/>
	);
};

export default Radio;
