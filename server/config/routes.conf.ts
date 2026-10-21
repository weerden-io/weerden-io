import compression from 'compression';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export const STATIC_ROOT = `${process.cwd()}/frontend/dist/weerden-io/browser`;

export class RoutesConfig {
  static init(app: express.Application): void {
    app.disable('x-powered-by');
    // Required behind a reverse proxy (Render) for req.secure and client IPs
    app.set('trust proxy', 1);

    app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          'frame-src': ['https://www.youtube.com'],
          ...(process.env.NODE_ENV === 'production' ? {} : { 'upgrade-insecure-requests': null })
        }
      },
      // Disabled so cross-origin Google Fonts and YouTube embeds keep working
      crossOriginEmbedderPolicy: false
    }));
    app.use(express.json({ limit: '10kb' }));
    app.use(compression());

    // Rate limiting is registered before any route so it actually protects them
    const limiter = rateLimit({
      windowMs: 60 * 1000, // 1 minute
      limit: 100,
      standardHeaders: true,
      legacyHeaders: false
    });
    app.use(limiter);

    process.env.NODE_ENV === 'production'
      ? setupProd(app)
      : setupDev(app);

    app.use(express.static(STATIC_ROOT, { maxAge: '1y' }));
  }
}

const setupProd = (app: express.Application) => {
  // Always enforce https on prod (replaces the unmaintained express-sslify package)
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    req.secure
      ? next()
      : res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
  });
};

const setupDev = (app: express.Application) => {
  app.use(cors());
};
