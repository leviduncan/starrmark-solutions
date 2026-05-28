import { wpClient } from "./wp-client";
import {
  ALL_POSTS_QUERY,
  ALL_POST_SLUGS_QUERY,
  PAGE_BY_URI_QUERY,
  POST_BY_SLUG_QUERY,
} from "./wp-queries";
import type { WPPage, WPPost, WPPostSummary } from "./wp-types";

export async function getAllPosts(first = 20): Promise<WPPostSummary[]> {
  const data = await wpClient.request<{
    posts: { nodes: WPPostSummary[] };
  }>(ALL_POSTS_QUERY, { first });
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await wpClient.request<{ post: WPPost | null }>(
    POST_BY_SLUG_QUERY,
    { slug }
  );
  return data.post;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const data = await wpClient.request<{
    posts: { nodes: { slug: string }[] };
  }>(ALL_POST_SLUGS_QUERY);
  return data.posts.nodes.map((n) => n.slug);
}

export async function getPageByUri(uri: string): Promise<WPPage | null> {
  const data = await wpClient.request<{ page: WPPage | null }>(
    PAGE_BY_URI_QUERY,
    { uri }
  );
  return data.page;
}
