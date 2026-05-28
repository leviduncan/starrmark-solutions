import { GraphQLClient } from "graphql-request";

const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

if (!endpoint) {
  throw new Error(
    "WORDPRESS_GRAPHQL_ENDPOINT is not set. Add it to .env.local — e.g. https://your-wp-site.com/graphql"
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
