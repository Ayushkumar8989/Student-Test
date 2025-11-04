import mongoose from 'mongoose';
import logger from './logger';

interface ConnectOptions {
  maxRetries?: number;
  retryDelay?: number;
}

const connectDB = async (options: ConnectOptions = {}): Promise<void> => {
  const { maxRetries = 5, retryDelay = 5000 } = options;
  let retries = 0;

  const connect = async (): Promise<void> => {
    try {
      const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/student_test_admission';

      await mongoose.connect(mongoURI);

      logger.info(`MongoDB connected successfully: ${mongoose.connection.host}`);
    } catch (error) {
      retries += 1;
      logger.error(`MongoDB connection error (attempt ${retries}/${maxRetries}):`, error);

      if (retries < maxRetries) {
        logger.info(`Retrying connection in ${retryDelay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return connect();
      } else {
        logger.error('Max retry attempts reached. Could not connect to MongoDB.');
        process.exit(1);
      }
    }
  };

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB disconnected. Attempting to reconnect...');
  });

  mongoose.connection.on('error', err => {
    logger.error('MongoDB connection error:', err);
  });

  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    logger.info('MongoDB connection closed due to application termination');
    process.exit(0);
  });

  await connect();
};

export default connectDB;
