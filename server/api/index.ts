import * as express from 'express';
import { getRss } from './rss';

export class ApiRoutes {
  static init(app: express.Application) {
    const apiRouter = express.Router();

    apiRouter
      .route('/rss')
      .get(getRss);

    app.use('/api', apiRouter);
  }
}
