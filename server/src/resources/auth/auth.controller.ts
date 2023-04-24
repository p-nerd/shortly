import { Request, Response } from "express";
import httpStatus from "http-status";
import { emailService } from "../../modules/email";
import { tokenService } from "../../modules/token";
import catchAsync from "../../modules/utils/catchAsync";
import { userService } from "../user";
import * as authService from "./auth.service";

export const register = catchAsync(async (req: Request, res: Response) => {
    const user = await userService.registerUser(req.body);
    const tokens = await tokenService.generateAuthTokens(user);
    return res.status(httpStatus.CREATED).send({ user, tokens });
});

export const login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const tokens = await tokenService.generateAuthTokens(user);
    res.status(httpStatus.OK).send({ user, tokens });
});

export const logout = catchAsync(async (req: Request, res: Response) => {
    await authService.logout(req.body.refreshToken);
    res.status(httpStatus.NO_CONTENT).send();
});

export const refreshTokens = catchAsync(async (req: Request, res: Response) => {
    const userWithTokens = await authService.refreshAuth(req.body.refreshToken);
    res.send({ ...userWithTokens });
});

export const forgotPassword = catchAsync(async (req: Request, res: Response) => {
    const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
    await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
    res.status(httpStatus.NO_CONTENT).send();
});

export const resetPassword = catchAsync(async (req: Request, res: Response) => {
    const token = String(req.query["token"]);
    await authService.resetPassword(token, req.body.password);
    return res.status(httpStatus.NO_CONTENT).send();
});

export const sendVerificationEmail = catchAsync(async (req: Request, res: Response) => {
    const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
    await emailService.sendVerificationEmail(req.user.email, verifyEmailToken, req.user.name);
    return res.status(httpStatus.NO_CONTENT).send();
});

export const verifyEmail = catchAsync(async (req: Request, res: Response) => {
    await authService.verifyEmail(req.query["token"]);
    return res.status(httpStatus.NO_CONTENT).send();
});
