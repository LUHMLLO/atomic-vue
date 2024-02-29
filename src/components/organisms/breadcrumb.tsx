import React, { ReactNode } from 'react';

interface Props {
	className?: string;
	children?: ReactNode;
}

const Breadcrumb: React.FC<Props> = ({ className, children }) => {
	return (
		<ul
			className={`inline-flex items-center flex-shrink gap-5xs whitespace-nowrap w-max ${className}`}>
			{children}
		</ul>
	);
};

export default Breadcrumb;
