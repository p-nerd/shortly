import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import response from "../core/response";

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        req.body = response.body;
        return next();
    } catch (error: any) {
        return response(res, 400, "validation error", error.errors);
    }
};

export default validate;
