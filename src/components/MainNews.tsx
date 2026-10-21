import Image from "next/image";
import Link from "next/link";
import React from "react";
interface News {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string    
}

const MainNews = ({ news }: {news:News[]}) => {
  const [firstNews, ...otherNews] = news;
  console.log(firstNews);
  return (
    <div className="flex gap-2 mt-4">
      {/* <Link href={`/news/${firstNews.id}`}> */}
      <Link href={`/news/${firstNews.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image src={firstNews.imageUrl} height={600} width={600} alt={firstNews.imageAlt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
      </Link>
      {/* </Link> */}
      <div>
        {otherNews.slice(0, 4).map((otherNe) => (
          <Link href={`/news/${otherNe.id}`} key={otherNe.id}>
          <div
            className="card bg-base-100 border border-gray-300 p-5"
            key={otherNe.id}
          >
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
            <div>{otherNe.title}</div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
