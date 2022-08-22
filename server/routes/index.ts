import * as express from 'express';
import rateLimit from 'express-rate-limit';
import { ApiRoutes } from '../api';

export class Routes {
  static init(app: express.Application, router: express.Router) {
    ApiRoutes.init(app);

    router
      .route('*')
      .get((req: express.Request, res: express.Response) => {
        res.sendFile('index.html', {root: `${process.cwd()}/frontend/dist/weerden-io`});
      });

    const limiter = rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: 5
    });
    // apply rate limiter to all requests
    app.use(limiter);
    app.use('/', router);
  }
}
