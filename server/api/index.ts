import * as express from 'express';
import rateLimit from 'express-rate-limit';

import { getRss } from './rss';

export class ApiRoutes {
  static init(app: express.Application): void {
    const apiRouter = express.Router();

    // Stricter limit for the API on top of the global one
    const apiLimiter = rateLimit({
      windowMs: 60 * 1000, // 1 minute
      limit: 30,
      standardHeaders: true,
      legacyHeaders: false
    });
    apiRouter.use(apiLimiter);

    apiRouter
      .route('/rss')
      .get(getRss);

    app.use('/api', apiRouter);
  }
}
