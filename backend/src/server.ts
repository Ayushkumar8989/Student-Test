import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import connectDB from './config/database';
import logger from './config/logger';
import errorHandler from './middleware/errorHandler';
import routes from './routes';

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(compression());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api', routes);

app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB({
      maxRetries: parseInt(process.env.MONGODB_RETRY_ATTEMPTS || '5'),
      retryDelay: parseInt(process.env.MONGODB_RETRY_DELAY || '5000'),
    });

    app.listen(PORT, () => {
      logger.info(`Server running in ${NODE_ENV} mode on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
