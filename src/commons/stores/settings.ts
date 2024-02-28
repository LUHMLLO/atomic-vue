import { persistentMap } from '@nanostores/persistent';

export type AppSettings = {
	sidebar: 'show' | 'hide';
	theme: 'dark' | 'light';
};

export const $settings = persistentMap<AppSettings>('settings:', {
	sidebar: 'show',
	theme: 'light',
});

export function $toggleSidebar() {
	const currentSidebarState = $settings.get().sidebar;

	const newSidebarState = currentSidebarState === 'show' ? 'hide' : 'show';

	$settings.setKey('sidebar', newSidebarState);
}

export function $toggleTheme() {
	const currentThemeSetting = $settings.get().theme;

	const newThemeSetting = currentThemeSetting === 'light' ? 'dark' : 'light';

	$settings.setKey('theme', newThemeSetting);
}