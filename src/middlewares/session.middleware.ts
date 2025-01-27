import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import config from '../config';

const RedisStore = connectRedis(session);
const redisClient = new Redis(config.REDIS_URL);

export const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient }),
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' },
});
