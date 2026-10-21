import { config } from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import { ApiError } from './api/utils/ApiError';
import { RoutesConfig } from './config/routes.conf';
import { Routes } from './routes';

config();
const app = express();
const port = process.env.PORT || 4300;

RoutesConfig.init(app);
Routes.init(app, express.Router());

// Unknown API endpoints return a 404 instead of the SPA fallback
app.use('/api', (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Central error handler, no stack traces leaked to clients
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const isApiError = err instanceof ApiError;
  const statusCode = isApiError ? err.statusCode : httpStatus.INTERNAL_SERVER_ERROR;
  const message = isApiError ? err.message : 'Internal server error';

  if (!isApiError) {
    console.error(err);
  }

  res.status(statusCode).json({ statusCode, message });
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port} on ${process.env.NODE_ENV}`);
});
