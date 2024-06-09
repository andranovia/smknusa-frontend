import ArticleHero from "@/components/article";
import ArticleCard from "@/components/article/article-card";
import ArticleForm from "@/components/article/article-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ArticleHero />
      <div className="container  bg-white max-w-full h-full lg:rounded-lg">
        <ArticleForm />
        <ArticleCard />
      </div>
    </main>
  );
}
