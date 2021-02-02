export interface WeerdenProject {
  name: string;
  title: string;
  featured: boolean;
  techStack?: string[];
  summary: string;
  description: string;
  featuredImage: string;
  impressions?: {
    imageUrl: string;
    alt: string;
  }[];
  impressionVideo?: string;
  url?: string;
}
