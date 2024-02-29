import React from 'react';
import Button from '@components/molecules/button.tsx';

interface Props {
	borderless?: boolean;
	buttons: Array<{
		active?: boolean;
		borderless?: boolean;
		className?: string;
		filled?: boolean;
		leading_icon?: string;
		leading_icon_fill?: boolean;
		onClick?: () => void;
		rounded?: boolean;
		text?: string;
		trailing_icon?: string;
		trailing_icon_fill?: boolean;
		type?: 'button' | 'reset' | 'submit' | undefined;
	}>;
	className?: string;
	filled?: boolean;
	rounded?: boolean;
}

const Buttongroup: React.FC<Props> = ({
	borderless = false,
	buttons,
	className = '',
	filled = false,
	rounded = false,
}) => {
	const states_outline = `outline outline-2 outline-neutral-900 dark:outline-neutral-100`;

	return (
		<ul
			className={`
				inline-flex items-stretch justify-center flex-shrink overflow-hidden whitespace-nowrap w-max gap-1
				${!filled && !borderless && states_outline} 
				${rounded && 'rounded-5xs'}
				${className}
			`}>
			{buttons.map((btn, index) => (
				<Button
					key={index}
					text={btn.text}
					leading_icon={btn.leading_icon}
					leading_icon_fill={btn.leading_icon_fill}
					trailing_icon={btn.trailing_icon}
					trailing_icon_fill={btn.trailing_icon_fill}
					filled={filled}
					onClick={btn.onClick}
				/>
			))}
		</ul>
	);
};

export default Buttongroup;
