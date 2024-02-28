import { AxiosError } from 'axios';
import { $setToken } from '@api/token.ts';
import { $setNotification } from '@stores/notifications.ts';

export function HandleApiError(error: unknown) {
    const axios_error: AxiosError = error as AxiosError;

    const err_code = axios_error.code as string;
    const err_response = axios_error.response;
    const err_status = err_response?.status;
    const err_data = err_response?.data as Required<{ message: string }>;

    if (err_code === 'ERR_NETWORK') {
        $setNotification({ title: err_code, content: err_data.message, icon: 'signal_wifi_bad' });
        return;
    }

    switch (err_status) {
        case 400:
            $setNotification({ title: err_code, content: err_data.message, icon: 'error' });
            break;
        case 401:
            $setToken(null);
            $setNotification({ title: err_code, content: err_data.message, icon: 'vpn_key_off' });
            break;
        case 500:
            $setNotification({ title: err_code, content: err_data.message, icon: 'public_off' });
            break;
    }

    if (import.meta.env.MODE === 'development') {
        console.error('Api error', axios_error)
    }
}