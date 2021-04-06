import { Request, Response } from 'express';
import * as Parser from 'rss-parser';
import { catchAsync } from '../utils/catch-async';
const parser = new Parser();

export const getRss = catchAsync(async (req: Request, res: Response) => {
    const rssFeed = await parser.parseURL('https://jimenezweerden.wordpress.com/feed/');
    res.send(rssFeed);
});
