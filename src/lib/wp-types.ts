export type WPImage = {
  sourceUrl: string;
  altText: string | null;
  mediaDetails?: {
    width: number | null;
    height: number | null;
  } | null;
};

export type WPAuthor = {
  node: {
    name: string | null;
    slug: string | null;
  };
};

export type WPPostSummary = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: { node: WPImage } | null;
  author: WPAuthor | null;
};

export type WPPost = WPPostSummary & {
  content: string;
};

export type WPPage = {
  id: string;
  slug: string;
  title: string;
  content: string;
  featuredImage: { node: WPImage } | null;
};
