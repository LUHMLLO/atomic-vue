import React from 'react';
import Icon from '@components/atoms/icon.tsx';
import { $settings, $toggleTheme } from '@stores/settings.ts';
import { useStore } from '@nanostores/react';

interface Props {}

const ThemeToggle: React.FC<Props> = () => {
	const settings = useStore($settings);

	return (
		<span
			className={`inline-flex cursor-pointer text-amber-300`}
			onClick={() => $toggleTheme()}>
			{settings.theme === 'light' ? (
				<Icon name='light_mode' filled />
			) : (
				<Icon name='dark_mode' filled />
			)}
		</span>
	);
};

export default ThemeToggle;
