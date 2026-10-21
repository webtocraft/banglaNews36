import Link from "next/link";

interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/news/most-read`);
  const data = await res.json();
  const news: MostReadNews[] = data.data;

  return (
    <div className=" card p-2 border bg-base-100 border-gray-300 ml-5">
      <h2 className=" text-2xl font-bold text-red-700 mb-3">সর্বাধিক পঠিত</h2>

      <div className=" grid gap-3">
        {news.map((m, i) => (
          <Link href={`/news/${m.id}`} key={m.id}>
           <div className="flex gap-2" key={m.id}>
            <p className="text-xl font-bold text-red-700">{i + 1}</p>{" "}
            <h2>{m.title}</h2>
          </div>
          </Link>
         
        ))}
      </div>
    </div>
  );
};

export default MostRead;
