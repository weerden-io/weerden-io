import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import enforce from 'express-sslify';
import compression from 'compression';

export class RoutesConfig {
  static init(app: express.Application): void {
    app.use(bodyParser.json());
    app.use(compression());

    process.env.NODE_ENV === 'production'
      ? setupProd(app)
      : setupDev(app);

    app.use(express.static(`${process.cwd()}/frontend/dist/weerden-io`));
  }
}

const setupProd = (app: express.Application) => {
  // Always enforce https on prod
  app.use(enforce.HTTPS({trustProtoHeader: true}));
};

const setupDev = (app: express.Application) => {
  app.use(cors());
};
