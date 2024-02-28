import { map } from 'nanostores';

interface Notification {
	icon: string;
	title: string;
	content: string;
	isOpen?: boolean;
	isClosable?: boolean;
}

export const $notification = map<Notification>({
	icon: '',
	title: '',
	content: '',
});

let timeOut: NodeJS.Timeout | undefined = undefined;

export function $setNotification(payload: Notification) {
	// Clear any existing timeout to prevent multiple notifications from stacking up (this might change later)
	if (timeOut !== undefined) {
		clearTimeout(timeOut);
	}

	$notification.set({ ...payload, isOpen: true });

	timeOut = setTimeout(() => {
		$notification.set({ ...payload, isOpen: false });
	}, 3500);
}

export function $closeNotification() {
	$notification.set({
		icon: '',
		title: '',
		content: '',
		isOpen: false,
	});
}