import React, { ReactNode, useRef, useState } from 'react';

import Text from '@components/atoms/text.tsx';
import Button from '@components/molecules/button.tsx';

interface DialogProps {
	text: string;
	open?: boolean;
	fullscreen?: boolean;
	children?: ReactNode;
	onClick?: () => void;
}

const Dialog: React.FC<DialogProps> = ({
	text = '',
	open = false,
	fullscreen = false,
	children,
}) => {
	const dialogComponent = useRef<HTMLDialogElement | null>(null);
	const [isModal, setIsModal] = useState(false);

	function reOpen(): void {
		if (dialogComponent.current) {
			dialogComponent.current.close();
			dialogComponent.current.show();
		}
		setIsModal(!isModal);
	}

	function reOpenAsModal(): void {
		if (dialogComponent.current) {
			dialogComponent.current.close();
			dialogComponent.current.showModal();
		}
		setIsModal(!isModal);
	}

	return (
		<dialog
			ref={dialogComponent}
			className='open:flex flex-col flex-grow flex-shrink gap-xs p-xs bg-neutral-900 text-neutral-400 rounded-5xs w-full max-w-[96%] max-h-[96%] overflow-hidden'
			open={open}>
			<header className='flex items-center justify- gap-xs z-10'>
				{isModal && (
					<Button className='p-5xs' leading_icon='close' onClick={reOpen} />
				)}

				<Text tag='h6' text={text} className='flex-grow' />

				{fullscreen && !isModal && (
					<Button leading_icon='fullscreen' onClick={reOpenAsModal} />
				)}
			</header>
			<section className='flex flex-col gap-xs flex-grow flex-shrink max-h-full w-full z-0 overflow-y-auto'>
				{children}
			</section>
			<footer className='flex items-center justify-end gap-xs z-10'>
				<Button text='Accept' />
				<Button text='Cancel' />
			</footer>
		</dialog>
	);
};

export default Dialog;
