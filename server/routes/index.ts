import express = require('express');
import rateLimit from 'express-rate-limit';
import { ApiRoutes } from '../api';

export class Routes {
  static init(app: express.Application, router: express.Router) {
    ApiRoutes.init(app);

    router.get(/.*/, (req, res) => {
      res.sendFile('index.html', { root: `${process.cwd()}/frontend/dist/weerden-io` });
    });

    const limiter = rateLimit({
      windowMs: 60 * 1000,
      max: 5,
    });

    app.use(limiter);
    app.use('/', router);
  }
}
