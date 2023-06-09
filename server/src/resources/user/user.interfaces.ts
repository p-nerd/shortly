import mongoose, { Document, Model } from "mongoose";
import { QueryResult } from "../../modules/paginate/paginate";
import { AccessAndRefreshTokens } from "../../modules/token/token.interfaces";

export interface IUser {
    email: string;
    password: string;
    role: string;
    lastLogin: Date;
    name?: string | undefined;
    otherEmails?: OtherEmail[] | undefined;
    mobileNumber?: string | undefined;
}

export interface IUserDoc extends IUser, Document {
    isPasswordMatch(password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDoc> {
    isEmailTaken(email: string, excludeUserId?: mongoose.Types.ObjectId): Promise<boolean>;
    paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}

export type UpdateUserBody = Partial<IUser>;

export type NewRegisteredUser = Omit<
    IUser,
    "role" | "primaryEmail" | "lastLogin" | "otherEmails" | "mobileNumber"
>;

export type NewCreatedUser = Omit<
    IUser,
    "primaryEmail" | "lastLogin" | "otherEmails" | "mobileNumber"
>;

export interface IUserWithTokens {
    user: IUserDoc;
    tokens: AccessAndRefreshTokens;
}

export type OtherEmail = {
    email: string;
    isEmailVerified: boolean;
    _id?: string;
};
