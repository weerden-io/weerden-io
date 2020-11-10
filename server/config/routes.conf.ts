import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as enforce from 'express-sslify';

export class RoutesConfig {
  static init(app: express.Application): void {
    app.use(bodyParser.json());
    app.use(express.static(`${process.cwd()}/frontend/dist/weerden-io`));

    process.env.NODE_ENV === 'production'
      ? setupProd(app)
      : setupDev(app);
  }
}

const setupProd = (app: express.Application) => {
  // Always enforce https on prod
  app.use(enforce.HTTPS({trustProtoHeader: true}));
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    req.secure
      ? next()
      : res.redirect('https://' + req.headers.host + req.url);
  });
};

const setupDev = (app: express.Application) => {
  app.use(cors());
};
