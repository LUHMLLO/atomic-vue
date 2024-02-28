export interface LoginDTO {
    username: string;
    password: string;
}

export interface PasswordDTO {
    passwordCurrent: string;
    passwordNew: string;
    passwordNewConfirm: string;
}

export interface UserDTO {
    id?: number;
    username?: string;
    password?: string;
}