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

export type OtherEmail = {
    email: string;
    isEmailVerified: boolean;
};

export type TUser = {
    name: string;
    email: string;
    role: "user" | "admin";
    id: string;
    otherEmails: [];
};

export type TAuthResponse = {
    user: TUser;
    tokens: {
        access: TToken;
        refresh: TToken;
    };
};

export type TAuthState = {
    user: TUser | null;
    tokens: {
        access: TToken;
        refresh: TToken;
    } | null;
};
