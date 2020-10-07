import * as express from 'express';
import { ApiRoutes } from '../api';

export class Routes {
  static init(app: express.Application, router: express.Router) {
    ApiRoutes.init(app);

    router
      .route('*')
      .get((req: express.Request, res: express.Response) => {
        res.sendFile('index.html', {root: `${process.cwd()}/frontend/dist/weerden-io`});
      });

    app.use('/', router);
  }
}
