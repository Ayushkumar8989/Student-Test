import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

interface CustomError extends Error {
  statusCode?: number;
  code?: number;
  keyValue?: Record<string, unknown>;
  errors?: Record<string, { message: string }>;
}

const errorHandler = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  let error = { ...err };
  error.message = err.message;

  logger.error(`Error: ${err.message}`, { stack: err.stack });

  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { ...error, message, statusCode: 404 };
  }

  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { ...error, message, statusCode: 400 };
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors || {})
      .map(val => val.message)
      .join(', ');
    error = { ...error, message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

export default errorHandler;
