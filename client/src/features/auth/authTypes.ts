export type TRegisterRequest = {
    email: string;
    password: string;
    name: string;
};

export type TLoginRequest = {
    email: string;
    password: string;
};

export type TToken = {
    token: string;
    expires: Date;
};

export type TUser = {
    name: string;
    email: string;
    role: "user" | "admin";
    isEmailVerified: boolean;
    id: string;
};

export type TAuthResponse = {
    user: TUser;
    tokens: {
        access: TToken;
        refresh: TToken;
    };
};

export type TAuth = {
    user: TUser | null;
    tokens: {
        access: TToken;
        refresh: TToken;
    } | null;
};
