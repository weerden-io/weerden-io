import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as enforce from 'express-sslify';

export class RoutesConfig {
  static init(app: express.Application): void {
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(express.static(`${process.cwd()}/frontend/dist/weerden-io`));
    if (process.env.NODE_ENV === 'production') {
      app.use(enforce.HTTPS({trustProtoHeader: true}));
    }
  }
}
