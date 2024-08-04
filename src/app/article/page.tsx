import ArticleCard from "@/components/article/article-card";
import ArticleForm from "@/components/article/article-form";
import InfoLayout from "@/layouts/info-layout";

export default function Home() {
  return (
    <InfoLayout
      title="Artikel-Artikel SMK"
      subtitle="Update artikel terbaru karya siswa-siswi SMK Negeri 1 Purwosari"
    >
      <div className="container  max-w-full  md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-full">
        <ArticleForm />
        <ArticleCard />
      </div>
    </InfoLayout>
  );
}
