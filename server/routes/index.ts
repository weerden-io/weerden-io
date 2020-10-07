import * as express from 'express';

export class Routes {
  static init(app: express.Application, router: express.Router) {
    const testResponse = ['test api route!'];
    router
      .route('/api/test')
      .get((req: express.Request, res: express.Response) => {
        res.json(testResponse);
      });

    router
      .route('*')
      .get((req: express.Request, res: express.Response) => {
        res.sendFile('index.html', {root: `${process.cwd()}/frontend/dist/weerden-io`});
      });

    app.use('/', router);
  }
}
