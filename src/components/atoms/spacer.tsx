import type React from 'react';

interface Props {
	direction: string;
	className?: string;
}

const Spacer: React.FC<Props> = ({ direction = '', className = '' }) => {
	return (
		<hr
			className={`align-middle border-none inline-flex flex-shrink min-w-nm ${
				direction === 'horizontal' && 'h-5xs w-full'
			} ${direction === 'vertical' && 'h-full w-5xs'} ${className}`}
		/>
	);
};

export default Spacer;
