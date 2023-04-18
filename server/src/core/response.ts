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
