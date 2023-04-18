import { IUser, OtherEmail } from "./user_model";

interface IUserResponse {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    isVerified: boolean;
    primaryEmail: string;
    lastLogin: Date;
    token: string;
    othersEmails?: OtherEmail[];
    mobileNumber?: string;
}

export const loginResponse = (user: IUser, token: string): IUserResponse => ({
    _id: user._id.toString(),
    email: user.email,
    isVerified: user.isVerified,
    primaryEmail: user.primaryEmail,
    othersEmails: user.otherEmails?.length ? user.otherEmails : undefined,
    name: user.name,
    mobileNumber: user.mobileNumber,
    lastLogin: user.lastLogin,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    token: token,
});
