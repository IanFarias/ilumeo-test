import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import { routes } from '@routes/index';
import '@database/index';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(express.json());

app.use(routes);

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
