import { z } from "zod";

const createUserRequest = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(32),
    name: z.string().max(128).optional(),
    mobileNumber: z.string().max(50).optional(),
});

export const createUserSchema = z.object({
    body: createUserRequest,
});

export type TCreateUserRequest = z.infer<typeof createUserRequest>;
