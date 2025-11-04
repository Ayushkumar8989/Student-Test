import { Request, Response } from 'express';
import asyncHandler from '../middleware/asyncHandler';
import mongoose from 'mongoose';

export const getHealth = asyncHandler(async (_req: Request, res: Response) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';

  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    database: dbStatus,
  });
});
