import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

interface IotherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  "use cache";
  const res = await fetch(`https://newsicapi.vercel.app/api/news/sections`);
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IotherSection[] = sections.slice(1);

  return (
    <div>
      

      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5">
            {otherSections.map((os) => (
              <div className="" key={os.curationId}>
                <h1 className="font-bold text-xl border-b-2 border-red-700 pb-3">
                  {os.title}
                </h1>

                <div className="grid grid-cols-3 gap-2 pt-3">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="col-span-1 py-4">
          <MostRead/>
        </div>
      </div>
    </div>
  );
}
