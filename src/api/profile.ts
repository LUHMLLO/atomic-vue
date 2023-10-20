import axios from 'axios';
import { atom } from 'nanostores';
import { $token } from '@/api/token';
import { Profile } from '@/commons/interfaces/profiles';
import { HandleApiError } from '@/commons/utils/handleApiErrors';

export const $profile = atom<Profile | null>(null);

export function $setProfile(profile: Profile | null) {
    $profile.set(profile);
}

export async function GetProfile() {
    const jwt = $token.get();

    try {
        const response = await axios.get(
            import.meta.env.VITE_ENDPOINT_PROFILE,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status === 200) {
            const profile: Profile = await response.data.payload;
            $setProfile(profile);
        }
    } catch (error: unknown) {
        HandleApiError(error)
    }
}
