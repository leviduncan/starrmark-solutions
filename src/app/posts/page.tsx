import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/wp";

export const metadata = {
  title: "Posts — Starrmark Solutions",
  description: "Latest posts from WordPress.",
};

export default async function PostsPage() {
  const posts = await getAllPosts(20);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Home
        </Link>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Posts</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Pulled live from WordPress via WPGraphQL.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-zinc-500">No posts yet.</p>
      ) : (
        <ul className="flex flex-col gap-10">
          {posts.map((post) => {
            const img = post.featuredImage?.node;
            return (
              <li
                key={post.id}
                className="border-b border-zinc-200 pb-10 last:border-b-0 dark:border-zinc-800"
              >
                <Link href={`/posts/${post.slug}`} className="group block">
                  {img?.sourceUrl && (
                    <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src={img.sourceUrl}
                        alt={img.altText ?? ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <time
                    dateTime={post.date}
                    className="text-xs uppercase tracking-wide text-zinc-500"
                  >
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2
                    className="mt-2 text-2xl font-semibold tracking-tight group-hover:underline"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <div
                    className="mt-3 text-zinc-600 dark:text-zinc-400"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
