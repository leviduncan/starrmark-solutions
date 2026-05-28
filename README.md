# Starrmark Solutions — Headless WordPress + Next.js

Next.js 16 (App Router, TypeScript, Tailwind v4) frontend that consumes a
remote WordPress backend through **WPGraphQL**.

## Stack

- **Next.js 16** — App Router, React Server Components, Turbopack
- **TypeScript**
- **Tailwind CSS v4**
- **graphql-request** — minimal GraphQL client (works inside RSC, no provider)
- **WPGraphQL** (on the WordPress side) — exposes posts, pages, media, etc.
  as a single `/graphql` endpoint

## Prerequisites on the WordPress side

Your existing WP install needs:

1. **[WPGraphQL](https://wordpress.org/plugins/wp-graphql/)** — activated.
   This exposes `https://your-site.com/graphql`.
2. **[WPGraphQL CORS](https://github.com/funkhaus/wp-graphql-cors)** (optional
   but recommended) — lets you query from the Next.js dev server in browser
   contexts.
3. For previews / drafts / private content: an auth method such as
   [WPGraphQL JWT](https://github.com/wp-graphql/wp-graphql-jwt-authentication)
   or an Application Password.

Sanity check: open `https://your-wp-site.com/graphql` in a browser. WPGraphQL
returns an error JSON for GET requests when working correctly — that's expected.
A 404 means the plugin isn't active or your permalinks need flushing.

## Local setup

```powershell
# 1. Install deps
npm install

# 2. Configure environment
Copy-Item .env.local.example .env.local
# Edit .env.local and set WORDPRESS_GRAPHQL_ENDPOINT + NEXT_PUBLIC_WORDPRESS_URL

# 3. Run
npm run dev
```

Open <http://localhost:3000>. The `/posts` route pulls from WordPress.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `WORDPRESS_GRAPHQL_ENDPOINT` | Full GraphQL endpoint, e.g. `https://cms.example.com/graphql`. Server-only. |
| `NEXT_PUBLIC_WORDPRESS_URL` | Origin of the WP site. Used by `next.config.ts` to allow `next/image` to load media from WP. |
| `WORDPRESS_AUTH_TOKEN` | Optional bearer token for authenticated requests (drafts, private posts). |
| `WORDPRESS_REVALIDATE_SECRET` | Shared secret for the `/api/revalidate` webhook. |

## Project structure

```
src/
  app/
    page.tsx                # Landing
    posts/
      page.tsx              # List of posts (RSC, ISR 60s)
      [slug]/page.tsx       # Single post (generateStaticParams + ISR)
    api/
      revalidate/route.ts   # POST hook for on-demand revalidation
  lib/
    wp-client.ts            # GraphQL client (server-side, with Next cache tags)
    wp-queries.ts           # GQL documents (posts, pages, slugs)
    wp.ts                   # Typed fetch helpers
    wp-types.ts             # Response types
```

## Caching & revalidation

The GraphQL client tags every WP fetch with `wordpress` and uses
`revalidate: 60`, so pages re-fetch at most once a minute under load.

For instant updates, POST to the revalidate route from WordPress
(e.g. via a `save_post` hook):

```bash
curl -X POST https://your-next-site.com/api/revalidate \
  -H "x-revalidate-secret: $WORDPRESS_REVALIDATE_SECRET"
```

That call invalidates the `wordpress` tag, so every WP-backed page rebuilds
on its next request.

## Adding new content types

1. Add the query to [src/lib/wp-queries.ts](src/lib/wp-queries.ts).
2. Add a typed helper to [src/lib/wp.ts](src/lib/wp.ts).
3. Build the page under `src/app/...` as an async Server Component.

## Production notes

- The current `next.config.ts` allows `next/image` to load from the host in
  `NEXT_PUBLIC_WORDPRESS_URL`. Add more `remotePatterns` if you serve media
  from a CDN.
- `next build` will fail if `WORDPRESS_GRAPHQL_ENDPOINT` is missing — that's
  intentional. Set it in your host (Vercel / Netlify / etc.) before deploying.
- `generateStaticParams` pre-renders the first 100 posts at build time; the
  rest are rendered on demand and cached.
