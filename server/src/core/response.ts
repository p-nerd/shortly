import { Response } from "express";

const response = (res: Response, status: number, message: string, data: any = "") => {
    const success = 100 <= status && status <= 399;
    return res.status(status).json({
        success,
        message,
        data,
    });
};

export default response;

export const error500 = (res: Response) => {
    response(res, 500, "internal server error", "Check the server if you are developer");
};
