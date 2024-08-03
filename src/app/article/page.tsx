import ArticleCard from "@/components/article/article-card";
import ArticleForm from "@/components/article/article-form";
import InfoLayout from "@/layouts/info-layout";

export default function Home() {
  return (
    <InfoLayout
      title="Artikel-Artikel SMK"
      subtitle="Update artikel terbaru karya siswa-siswi SMK Negeri 1 Purwosari"
    >
      <div className="container  bg-white max-w-full h-full xl:rounded-lg">
        <ArticleForm />
        <ArticleCard />
      </div>
    </InfoLayout>
  );
}
