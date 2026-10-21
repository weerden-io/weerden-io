import * as express from 'express';

import { ApiRoutes } from '../api';
import { STATIC_ROOT } from '../config/routes.conf';

export class Routes {
  static init(app: express.Application, router: express.Router): void {
    ApiRoutes.init(app);

    // SPA fallback: every non-API GET request serves index.html
    // (Express 5 no longer supports the '*' wildcard route)
    router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (req.method !== 'GET' || req.path.startsWith('/api')) {
        next();
        return;
      }
      res.sendFile('index.html', { root: STATIC_ROOT });
    });

    app.use('/', router);
  }
}
