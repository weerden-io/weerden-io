import { Application, send } from 'https://deno.land/x/oak/mod.ts';
import 'https://deno.land/x/denv/mod.ts';
import * as log from 'https://deno.land/std/log/mod.ts';

import { PORT } from './server/config/config.ts';
import loggerMiddleware from './server/middlewares/logger.ts';
import timingMiddleware from './server/middlewares/timing.ts';
import errorMiddleware from './server/middlewares/error.ts';
import apiRouter from './server/router.ts';
import notFoundMiddleware from './server/middlewares/notFound.ts';

const app = new Application();

app.use(loggerMiddleware);
app.use(timingMiddleware);
app.use(errorMiddleware);
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
// serve statics
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/dist/weerden-io`,
    index: 'index.html',
  });
});
app.use(notFoundMiddleware);


log.info(`Listening on port ${PORT}`);
await app.listen({ port: PORT });
