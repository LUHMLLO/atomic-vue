import axios from 'axios';
import { atom } from 'nanostores';
import { $token } from '@api/token.ts';
import { $setNotification } from '@stores/notifications.ts';
import { User } from '@interfaces/users.ts';
import { HandleApiError } from '@utils/handleApiErrors.ts';
import { UserDTO } from '@interfaces/dtos.ts';

export const $users = atom<User[]>([]);
export const $userDetails = atom<User | null>(null);

export function $addUser(user: User) {
	$users.set([...$users.get(), user]);
}

export function $setUsers(users: User[]) {
	$users.set(users);
}

export function $setUserDetails(user: User) {
	$userDetails.set(user);
}

export async function GetAllUsers() {
	const jwt = $token.get();

	try {
		const response = await axios.get(import.meta.env.VITE_ENDPOINT_USERS, {
			headers: {
				Authorization: `Bearer ${jwt}`,
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 200) {
			const users: User[] = await response.data;
			$setUsers(users);
		} else {
			$setNotification({
				title: 'Error',
				content: 'hubo un error cargando la lista de usuarios',
				icon: 'warning',
			});
		}
	} catch (error: unknown) {
		HandleApiError(error);
	}
}

export async function GetUser(id: string) {
	const jwt = $token.get();

	try {
		const response = await axios.get(
			`${import.meta.env.VITE_ENDPOINT_USERS_READ}${id}`,
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.status === 200) {
			const user: User = await response.data;
			$setUserDetails(user);
		} else {
			$setNotification({
				title: 'Error',
				content: 'hubo un error obteniendo el perfil de usuario',
				icon: 'warning',
			});
		}
	} catch (error: unknown) {
		HandleApiError(error);
	}
}

export async function CreateUser(
	data: UserDTO,
	navigate?: (path: string) => void
) {
	const jwt = $token.get();

	try {
		const response = await axios.post(
			import.meta.env.VITE_ENDPOINT_USERS_HANDLE,
			data,
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.status === 200) {
			$setNotification({
				title: 'Success',
				content: 'new user has been created',
				icon: 'check_circle',
			});
			if (navigate) {
				navigate('/users');
			}
		} else {
			$setNotification({
				title: 'Error',
				content: 'there has been an error creating user',
				icon: 'error',
			});
		}
	} catch (error: unknown) {
		HandleApiError(error);
	}
}
