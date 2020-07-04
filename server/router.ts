import { Router  } from 'https://deno.land/x/oak/mod.ts';
import { getExample } from './api/controllers/example.ts';

const apiRouter = new Router({prefix: '/api'});

apiRouter
  .get('/example', getExample);

export default apiRouter;
