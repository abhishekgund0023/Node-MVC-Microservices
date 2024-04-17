import { Request, Response, NextFunction } from "express";
import HTTP_STATUS_CODE from "../httpStatusCodes";

const returnSuccess = (data: any, req: Request, res: Response, next: NextFunction) => {
    res.status(data.statusCode || HTTP_STATUS_CODE.FOUND);
    res.json(data);
};

export default returnSuccess;
