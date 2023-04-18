import z from "zod";

const createUserRequest = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(32),
    name: z.string().max(128).optional(),
    mobileNumber: z.string().max(50).optional(),
});
export type TCreateUserRequest = z.infer<typeof createUserRequest>;

export const createUserSchema = z.object({
    body: createUserRequest,
});

const loginUserRequest = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(32),
});
export type TLoginUserRequest = z.infer<typeof loginUserRequest>;

export const loginUserSchema = z.object({
    body: loginUserRequest,
});
