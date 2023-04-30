import Joi from "joi";
import { objectId, password } from "../../modules/validate/custom.validation";
import { NewCreatedUser, OtherEmail } from "./user.interfaces";

const createUserBody: Record<keyof NewCreatedUser, any> = {
    name: Joi.string().optional(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    role: Joi.string().required().valid("user", "admin"),
};

export const createUser = {
    body: Joi.object().keys(createUserBody),
};

export const getUsers = {
    query: Joi.object().keys({
        name: Joi.string(),
        role: Joi.string(),
        sortBy: Joi.string(),
        projectBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

export const getUser = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId),
    }),
};

export const updateUser = {
    params: Joi.object().keys({
        userId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            email: Joi.string().email(),
            password: Joi.string().custom(password),
            name: Joi.string(),
        })
        .min(1),
};

export const updateUserMe = {
    body: Joi.object()
        .keys({
            email: Joi.string().email(),
            password: Joi.string().custom(password),
            name: Joi.string(),
            otherEmails: Joi.array().items(
                Joi.object<OtherEmail>({
                    email: Joi.string().email().required(),
                    isEmailVerified: Joi.boolean().required(),
                    _id: Joi.string(),
                })
            ),
        })
        .min(1),
};

export const changePasswordMe = {
    body: Joi.object().keys({
        currentPassword: Joi.string().required().custom(password),
        newPassword: Joi.string().required().custom(password),
    }),
};

export const deleteUser = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId),
    }),
};
