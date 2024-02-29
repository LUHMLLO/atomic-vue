import React from 'react';
import Step from '@components/molecules/step.tsx';

interface Step {
	name: string;
	hasBar: boolean;
	done?: boolean;
}

interface StepListProps {
	steps: Step[];
	className?: string;
}

const StepList: React.FC<StepListProps> = ({ steps, className }) => {
	return (
		<ul
			className={`flex items-center flex-shrink justify-center whitespace-nowrap gap-5xs w-full ${className}`}>
			{steps.map((step, index) => (
				<Step
					key={index}
					text={step.name}
					hasBar={step.hasBar}
					done={step.done}
				/>
			))}
		</ul>
	);
};

export default StepList;
