import { Handler, Router } from "express";
import response from "../../core/response";
import validate from "../../middlewares/validate";
import crypto from "../../services/crypto";
import userRepository from "./user_repository";
import { TCreateUserRequest, createUserSchema } from "./user_request";
import { loginResponse } from "./user_response";
import jwt from "../../services/jwt";

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

        const token = await jwt.generate({
            email: user.email,
            isVerified: user.isVerified,
        });

        return response(res, 201, "newly created user", loginResponse(user, token));
    } catch (error: any) {
        if (error === 409) {
            return response(res, 409, "email already exist", "Try another email");
        }
        return response(res, 500, "internal server error", "Check the server if you are developer");
    }
};

const userRouter = Router();

userRouter.post("/", validate(createUserSchema), create);

export default userRouter;
