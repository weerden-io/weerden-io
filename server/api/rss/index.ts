import { Request, Response } from 'express';
import Parser from 'rss-parser';
import { catchAsync } from '../utils/catch-async';
import httpStatus from 'http-status';
import { ApiError } from '../utils/ApiError';

const parser = new Parser();

export const getRss = catchAsync(async (req: Request, res: Response) => {
  const rssFeed = await parser.parseURL('https://jimenezweerden.wordpress.com/feed/');

  if (!rssFeed) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to fetch rssFeed');
  }

  res.send(rssFeed);
});
