import Image from "next/image";
import Link from "next/link";
import React from "react";
interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
            src={news.imageUrl}
            height={600}
            width={600}
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
