import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as enforce from 'express-sslify';

export class RoutesConfig {
  static init(app: express.Application): void {
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(express.static(`${process.cwd()}/frontend/dist/weerden-io`));

    process.env.NODE_ENV === 'production'
      ? setupProd(app)
      : setupDev(app)
  }
}

const setupProd = (app: express.Application) => {
  app.use(enforce.HTTPS({trustProtoHeader: true}));
}

const setupDev = (app: express.Application) => {
  app.use(cors());
}
