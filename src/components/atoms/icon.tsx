import type React from 'react';

interface Props {
	name: string;
	className?: string;
	filled?: boolean;
	onClick?: () => void;
}

const Icon: React.FC<Props> = ({
	name,
	className = '',
	filled = false,
	onClick,
}) => {
	const style = {
		fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
	};

	return (
		<i
			className={`material-symbols-rounded ${className}`}
			style={style}
			onClick={onClick}>
			{name}
		</i>
	);
};

export default Icon;
