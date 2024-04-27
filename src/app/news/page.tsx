import NewsHero from "@/components/berita";
import NewsCard from "@/components/berita/news-card";
import NewsForm from "@/components/berita/news-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NewsHero />
      <div className="container  bg-white max-w-full h-full lg:rounded-lg">
        <NewsForm />
        <NewsCard />
      </div>
    </main>
  );
}
