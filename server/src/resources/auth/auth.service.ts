import httpStatus from "http-status";
import mongoose from "mongoose";
import ApiError from "../../modules/errors/ApiError";
import Token from "../../modules/token/token.model";
import { generateAuthTokens, verifyToken } from "../../modules/token/token.service";
import tokenTypes from "../../modules/token/token.types";
import { IUserDoc, IUserWithTokens } from "../user/user.interfaces";
import { getUserByEmail, getUserById, updateUserById } from "../user/user.service";

export const loginUserWithEmailAndPassword = async (
    email: string,
    password: string
): Promise<IUserDoc> => {
    const user = await getUserByEmail(email);
    if (!user || !(await user.isPasswordMatch(password))) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
    }
    return user;
};

export const logout = async (refreshToken: string): Promise<void> => {
    const refreshTokenDoc = await Token.findOne({
        token: refreshToken,
        type: tokenTypes.REFRESH,
        blacklisted: false,
    });
    if (!refreshTokenDoc) {
        throw new ApiError(httpStatus.NOT_FOUND, "Not found");
    }
    await refreshTokenDoc.deleteOne();
};

export const refreshAuth = async (refreshToken: string): Promise<IUserWithTokens> => {
    try {
        const refreshTokenDoc = await verifyToken(refreshToken, tokenTypes.REFRESH);
        const user = await getUserById(new mongoose.Types.ObjectId(refreshTokenDoc.user));
        if (!user) {
            throw new Error();
        }
        await refreshTokenDoc.deleteOne();
        const tokens = await generateAuthTokens(user);
        return { user, tokens };
    } catch (error) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate");
    }
};

export const resetPassword = async (
    resetPasswordToken: string,
    newPassword: string
): Promise<void> => {
    try {
        const resetPasswordTokenDoc = await verifyToken(
            resetPasswordToken,
            tokenTypes.RESET_PASSWORD
        );
        const user = await getUserById(new mongoose.Types.ObjectId(resetPasswordTokenDoc.user));
        if (!user) {
            throw new ApiError(httpStatus.NOT_FOUND, "user not found");
        }
        await updateUserById(user.id, { password: newPassword });
        await Token.deleteMany({ user: user.id, type: tokenTypes.RESET_PASSWORD });
    } catch (error) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Password reset failed");
    }
};

export const verifyEmail = async (verifyEmailToken: any): Promise<IUserDoc | null> => {
    try {
        const verifyEmailTokenDoc = await verifyToken(verifyEmailToken, tokenTypes.VERIFY_EMAIL);
        const user = await getUserById(new mongoose.Types.ObjectId(verifyEmailTokenDoc.user));
        if (!user) {
            throw new Error("Not Found");
        }
        await Token.deleteMany({ user: user.id, type: tokenTypes.VERIFY_EMAIL });
        const updatedUser = await updateUserById(user.id, { isEmailVerified: true });
        return updatedUser;
    } catch (error) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Email verification failed");
    }
};
