import { GraphQLClient } from "graphql-request";

const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT ?? "";

export const isWpConfigured = Boolean(endpoint);

if (!isWpConfigured && process.env.NODE_ENV !== "production") {
  console.warn(
    "[wp] WORDPRESS_GRAPHQL_ENDPOINT is not set. WP-backed pages will render empty until you add it to .env.local (or your hosting env)."
  );
}

export const wpClient = new GraphQLClient(endpoint, {
  headers: process.env.WORDPRESS_AUTH_TOKEN
    ? { Authorization: `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}` }
    : undefined,
  fetch: (input, init) =>
    fetch(input, {
      ...init,
      next: { revalidate: 60, tags: ["wordpress"] },
    }),
});
