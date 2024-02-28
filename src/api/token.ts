import axios from 'axios';
import { persistentAtom } from '@nanostores/persistent';
import { GetProfile } from '@api/profile.ts';
import { $setNotification } from '@stores/notifications.ts';
import { Token } from '@interfaces/tokens.ts';
import { LoginDTO } from '@interfaces/dtos.ts';
import { HandleApiError } from '@utils/handleApiErrors.ts';

export const $token = persistentAtom<Token | null>('token', null, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export function $setToken(token: Token | null) {
	$token.set(token);
}

export async function GetToken(
	data: LoginDTO,
	navigate: (path: string) => void
) {
	try {
		const response = await axios.post(
			import.meta.env.VITE_ENDPOINT_LOGIN,
			data,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.status === 201) {
			const token: Token = await response.data.payload.token;
			$setToken(token);
			GetProfile();
			$setNotification({
				title: `Bienvenido de vuelta ${data.username}`,
				content: '',
				icon: 'check_circle',
			});
			navigate('/dashboard');
		}
	} catch (error: unknown) {
		HandleApiError(error);
	}
}
