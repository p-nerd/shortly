import { OtherEmail } from "@features/auth/authTypes";

export type TUserRequest = {
    name?: string;
    email?: string;
    password?: string;
    otherEmails?: OtherEmail[];
};
