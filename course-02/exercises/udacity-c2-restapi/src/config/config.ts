import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  postgress: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  aws: {
    serviceEnv: process.env.SERVICE_ENV,
    mediaBucket: process.env.AWS_MEDIA_BUCKET,
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
};
