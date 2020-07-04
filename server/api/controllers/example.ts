import { RouterMiddleware, Status } from 'https://deno.land/x/oak/mod.ts';

export const getExample: RouterMiddleware = async (context) => {
  context.response.status = Status.OK;
  context.response.body = {'helloThere': 'General Kenobi!'};
};
