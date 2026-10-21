import { Request, Response } from 'express';
import httpStatus from 'http-status';
import Parser from 'rss-parser';

import { ApiError } from '../utils/ApiError';
import { catchAsync } from '../utils/catch-async';

const parser = new Parser({ timeout: 10_000 });

export const getRss = catchAsync(async (req: Request, res: Response) => {
  const rssFeed = await parser.parseURL('https://jimenezweerden.wordpress.com/feed/');

  if (!rssFeed) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to fetch rssFeed');
  }

  res.send(rssFeed);
});
