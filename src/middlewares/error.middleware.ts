import { Request, Response, NextFunction } from "express";
import { logger } from "../lib/errors/logger";

export const errorMiddleware = (
  error: Error & { statusCode?: number },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;

  const message = error.statusCode ? error.message : "Erro interno do servidor";

  if (!error.statusCode) {
    logger.error({
      message: error.message,
      stack: error.stack,
      path: req.path,
      method: req.method,
    });
  }

  return res.status(statusCode).json({
    status: "error",
    message: message,
  });
};
