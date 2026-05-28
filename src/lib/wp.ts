import { isWpConfigured, wpClient } from "./wp-client";
import {
  ALL_POSTS_QUERY,
  ALL_POST_SLUGS_QUERY,
  PAGE_BY_URI_QUERY,
  POST_BY_SLUG_QUERY,
} from "./wp-queries";
import type { WPPage, WPPost, WPPostSummary } from "./wp-types";

function warnWpFailure(op: string, err: unknown) {
  const message = err instanceof Error ? err.message : String(err);
  console.warn(`[wp] ${op} failed — returning empty result. ${message}`);
}

export async function getAllPosts(first = 20): Promise<WPPostSummary[]> {
  if (!isWpConfigured) return [];
  try {
    const data = await wpClient.request<{
      posts: { nodes: WPPostSummary[] };
    }>(ALL_POSTS_QUERY, { first });
    return data.posts.nodes;
  } catch (err) {
    warnWpFailure("getAllPosts", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  if (!isWpConfigured) return null;
  try {
    const data = await wpClient.request<{ post: WPPost | null }>(
      POST_BY_SLUG_QUERY,
      { slug }
    );
    return data.post;
  } catch (err) {
    warnWpFailure(`getPostBySlug(${slug})`, err);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!isWpConfigured) return [];
  try {
    const data = await wpClient.request<{
      posts: { nodes: { slug: string }[] };
    }>(ALL_POST_SLUGS_QUERY);
    return data.posts.nodes.map((n) => n.slug);
  } catch (err) {
    warnWpFailure("getAllPostSlugs", err);
    return [];
  }
}

export async function getPageByUri(uri: string): Promise<WPPage | null> {
  if (!isWpConfigured) return null;
  try {
    const data = await wpClient.request<{ page: WPPage | null }>(
      PAGE_BY_URI_QUERY,
      { uri }
    );
    return data.page;
  } catch (err) {
    warnWpFailure(`getPageByUri(${uri})`, err);
    return null;
  }
}
