import { NextFunction, Request, RequestHandler, Response } from 'express';

type AsyncRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

export const catchAsync = (fn: AsyncRouteHandler): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise
      .resolve(fn(req, res, next))
      .catch((err) => next(err));
  };
