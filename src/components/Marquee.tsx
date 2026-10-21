import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
    id: string
    title: string
}
const Marquee = async () => {
  "use cache";
  const res = await fetch(`https://news-api-v2.vercel.app/api/news?limit=10`);
  const data = await res.json();
  const headlines:Headlines[] = data.data;
  console.log(headlines);
  return (
    <div className="bg-red-600 text-white">
      <div className="flex max-w-7xl mx-auto">
        <div className="bg-red-800 py-1 px-5">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={15}>
          {headlines.map((h) => (
            <Link href={`/news/${h.id}`} key={h.id}>
            <span key={h.id}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
