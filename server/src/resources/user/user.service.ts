import httpStatus from "http-status";
import mongoose from "mongoose";
import ApiError from "../../modules/errors/ApiError";
import { IOptions, QueryResult } from "../../modules/paginate/paginate";
import {
    IUser,
    IUserDoc,
    NewCreatedUser,
    NewRegisteredUser,
    UpdateUserBody,
} from "./user.interfaces";
import User from "./user.model";

export const createUser = async (userBody: NewCreatedUser): Promise<IUserDoc> => {
    if (await User.isEmailTaken(userBody.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }
    const body: IUser = {
        email: userBody.email,
        password: userBody.password,
        name: userBody.name,
        role: userBody.role,
        isEmailVerified: false,
        primaryEmail: userBody.email,
        lastLogin: new Date(),
    };
    return User.create(body);
};

export const registerUser = async (userBody: NewRegisteredUser): Promise<IUserDoc> => {
    if (await User.isEmailTaken(userBody.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }
    const body: IUser = {
        email: userBody.email,
        password: userBody.password,
        name: userBody.name,
        role: "user",
        isEmailVerified: false,
        primaryEmail: userBody.email,
        lastLogin: new Date(),
    };
    return User.create(body);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryUsers = async (
    filter: Record<string, any>,
    options: IOptions
): Promise<QueryResult> => {
    const users = await User.paginate(filter, options);
    return users;
};

export const getUserById = async (id: mongoose.Types.ObjectId): Promise<IUserDoc | null> =>
    User.findById(id);

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<IUserDoc | null>}
 */
export const getUserByEmail = async (email: string): Promise<IUserDoc | null> =>
    User.findOne({ email });

/**
 * Update user by id
 * @param {mongoose.Types.ObjectId} userId
 * @param {UpdateUserBody} updateBody
 * @returns {Promise<IUserDoc | null>}
 */
export const updateUserById = async (
    userId: mongoose.Types.ObjectId,
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

/**
 * Delete user by id
 * @param {mongoose.Types.ObjectId} userId
 * @returns {Promise<IUserDoc | null>}
 */
export const deleteUserById = async (userId: mongoose.Types.ObjectId): Promise<IUserDoc | null> => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    await user.deleteOne();
    return user;
};
