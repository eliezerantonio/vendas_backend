import { Request, Response, NextFunction } from 'express';
import Redis from 'ioredis';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import AppError from '@shared/errors/AppError';

export default async function ratelimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const redisClient = new Redis({
      host: process.env.REDIS_HOST || undefined,
      port: Number(process.env.REDIS_PORT),

      password: process.env.REDIS_PASS || undefined,
    });

    const limiter = new RateLimiterRedis({
      storeClient: redisClient,
      keyPrefix: 'ratelimit',
      points: 3,
      duration: 1,
    });

    await limiter.consume(request.ip);

    return next();
  } catch (error) {
    throw new AppError('Too many request.', 429);
  }
}
