import NewsCard from "@/components/NewsCard";
export const instant = false;

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews: News[] = data.data;

  return (
    <div>
      <h2 className="text-2xl font-bold border-b-2 border-red-700 mb-5 mt-8">
        {data.title}
      </h2>

      <div className="grid grid-cols-3 gap-10">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
