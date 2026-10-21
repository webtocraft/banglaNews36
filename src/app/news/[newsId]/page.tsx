import Image from "next/image";
import { notFound } from "next/navigation";
export const instant = false;

interface News {
  id: string;
  title: string;
  description?: {
    blocks?: {
      model?: {
        blocks?: {
          model?: {
            text?: string;
          };
        }[];
      };
    }[];
  };
  category: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string;
  text: string;
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const news: News | undefined = data?.data;

  if (!news) {
    notFound();
  }

  const description =
    news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text ??
    "No description available.";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <article className="space-y-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
          {news.title}
        </h1>

        <p className="text-base leading-7 text-gray-600">{description}</p>

        <p className="text-sm text-gray-500">
          Published: {news.firstPublished}
        </p>

        {news.imageUrl && (
          <div className="overflow-hidden rounded-lg">
            <Image
              src={news.imageUrl}
              alt={news.imageAlt || news.title}
              height={500}
              width={800}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        <div className="whitespace-pre-line text-base leading-8 text-gray-700">
          {news.text}
        </div>
      </article>
    </div>
  );
};

export default NewsDetails;
