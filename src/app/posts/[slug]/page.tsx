import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/wp";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: stripHtml(post.title),
    description: stripHtml(post.excerpt).slice(0, 160),
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const img = post.featuredImage?.node;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/posts"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← All posts
      </Link>

      <article className="mt-8">
        <header className="mb-10">
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
          <h1
            className="mt-2 text-4xl font-semibold tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          {post.author?.node?.name && (
            <p className="mt-3 text-sm text-zinc-500">
              By {post.author.node.name}
            </p>
          )}
        </header>

        {img?.sourceUrl && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={img.sourceUrl}
              alt={img.altText ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-zinc dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}
