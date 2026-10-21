export interface RssFeedItem {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  [key: string]: unknown;
}

export interface RssFeedResponse {
  items: RssFeedItem[];
  [key: string]: unknown;
}
