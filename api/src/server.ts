import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';
import '@database/index';
import '@shared/container';
import { routes } from '@routes/index';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(8080, () => console.log('Server Running...'));
