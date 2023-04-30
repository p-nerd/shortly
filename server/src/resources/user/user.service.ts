import httpStatus from "http-status";
import mongoose, { Types } from "mongoose";
import ApiError from "../../modules/errors/ApiError";
import { IOptions, QueryResult } from "../../modules/paginate/paginate";
import crypto from "../../packages/crypto";
import {
    IUser,
    IUserDoc,
    NewCreatedUser,
    NewRegisteredUser,
    UpdateUserBody,
} from "./user.interfaces";
import User from "./user.model";

const _createUser = async (
    email: string,
    password: string,
    name?: string,
    role: string = "user"
): Promise<IUserDoc> => {
    if (await User.isEmailTaken(email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }
    const body: IUser = {
        email: email,
        password: password,
        name: name,
        role: role,
        lastLogin: new Date(),
        otherEmails: [{ email, isEmailVerified: false }],
    };
    return User.create(body);
};

export const createUser = async (userBody: NewCreatedUser): Promise<IUserDoc> => {
    return _createUser(userBody.email, userBody.password, userBody.name, userBody.role ?? "user");
};

export const registerUser = async (userBody: NewRegisteredUser): Promise<IUserDoc> => {
    return _createUser(userBody.email, userBody.password, userBody.name, "user");
};

export const queryUsers = async (
    filter: Record<string, any>,
    options: IOptions
): Promise<QueryResult> => {
    const users = await User.paginate(filter, options);
    return users;
};

export const getUserById = async (id: Types.ObjectId): Promise<IUserDoc | null> => {
    return User.findById(id);
};

export const getUserByEmail = async (email: string): Promise<IUserDoc | null> =>
    User.findOne({ email });

export const updateUserById = async (
    userId: Types.ObjectId,
    updateBody: UpdateUserBody
): Promise<IUserDoc | null> => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }
    Object.assign(user, updateBody);
    await user.save();
    return user;
};

export const changePassword = async (
    userId: Types.ObjectId,
    currentPassword: string,
    newPassword: string
): Promise<IUserDoc | null> => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    const isCorrectPassword = await crypto.compare(currentPassword, user.password);
    if (!isCorrectPassword) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Wrong Password");
    }
    user.password = newPassword;
    await user.save();
    return user;
};

export const deleteUserById = async (userId: mongoose.Types.ObjectId): Promise<IUserDoc | null> => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    await user.deleteOne();
    return user;
};
