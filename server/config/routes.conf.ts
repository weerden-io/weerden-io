import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import enforce = require('express-sslify');
import compression = require('compression');

export class RoutesConfig {
  static init(app: express.Application): void {
    app.use(bodyParser.json());
    app.use(compression());

    process.env.NODE_ENV === 'production' ? setupProd(app) : setupDev(app);

    app.use(express.static(`${process.cwd()}/frontend/dist/weerden-io`));
  }
}

const setupProd = (app: express.Application) => {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
};

const setupDev = (app: express.Application) => {
  app.use(cors());
};
