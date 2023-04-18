import { Handler, Router } from "express";
import response, { error500 } from "../../core/response";
import validate from "../../middlewares/validate";
import crypto from "../../services/crypto";
import jwt from "../../services/jwt";
import userRepository from "./user_repository";
import { TCreateUserRequest, TLoginUserRequest, createUserSchema, loginUserSchema } from "./user_request";
import { loginResponse } from "./user_response";
import { IUser } from "./user_model";

const generateToken = async (user: IUser) => {
    return await jwt.generate({
        email: user.email,
        isVerified: user.isVerified,
    });
};

const create: Handler = async (req, res) => {
    try {
        const body: TCreateUserRequest = req.body;

        const password = await crypto.hash(body.password);
        const name = body.name ? body.name : body.email.split("@")[0];

        const user = await userRepository.save({
            ...body,
            password,
            name,
            isVerified: false,
            primaryEmail: body.email,
            lastLogin: new Date(),
        });

        const token = await generateToken(user);

        return response(res, 201, "newly created user", loginResponse(user, token));
    } catch (error: any) {
        if (error === 409) {
            return response(res, 409, "email already exist", "Try another email");
        }
        return error500(res);
    }
};

const login: Handler = async (req, res) => {
    try {
        const body: TLoginUserRequest = req.body;
        const user = await userRepository.getByEmail(body.email);
        const token = await generateToken(user);
        return response(res, 200, "token for the user", loginResponse(user, token));
    } catch (error: any) {
        if (error === 404) {
            return response(res, 404, "user not found error", "By the given email user is not found");
        }
        return error500(res);
    }
};

const userRouter = Router();

userRouter.post("/login", validate(loginUserSchema), login);
userRouter.post("/", validate(createUserSchema), create);

export default userRouter;
