import { Request, Response } from 'express';
import * as Parser from 'rss-parser';
const parser = new Parser();

export const getRss = async (req: Request, res: Response) => {
  // TODO: error handling
  const rssFeed = await parser.parseURL('https://jimenezweerden.wordpress.com/feed/');
  res.send(rssFeed);
};
