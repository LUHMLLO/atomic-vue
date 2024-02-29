import React from 'react';
import Icon from '@components/atoms/icon.tsx';
import { useStore } from '@nanostores/react';
import {
	$notification,
	$closeNotification,
} from '@stores/notifications.ts';

interface Props {
	className?: string;
}

const Notification: React.FC<Props> = ({ className }) => {
	const notification = useStore($notification);

	return (
		notification.isOpen && (
			<span
				className={`absolute bottom-0 right-0 mb-nm mr-nm inline-flex items-start justify-center gap-5xs p-nm rounded-5xs bg-zinc-500 shadow-lg shadow-neutral-500 dark:shadow-neutral-950 max-w-full ${className}`}>
				<Icon name={notification.icon} className='text-neutral-50' />
				<div className='flex flex-col'>
					<h6 className='font-semibold text-neutral-50'>
						{notification.title}
					</h6>
					<p className='font-semibold text-neutral-300'>
						{notification.content}
					</p>
				</div>

				{notification.isClosable && (
					<Icon
						name='close'
						className='text-neutral-50'
						onClick={() => $closeNotification()}
					/>
				)}
			</span>
		)
	);
};

export default Notification;
