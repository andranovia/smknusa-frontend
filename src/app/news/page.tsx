import NewsHero from "@/components/news";
import NewsCard from "@/components/news/news-card";
import NewsForm from "@/components/news/news-form";
import InfoLayout from "@/layouts/info-layout";

export default function Home() {
  return (
    <InfoLayout
      title="Berita-Berita SMK"
      className="container  bg-white max-w-full h-full lg:rounded-lg"
      subtitle="Update informasi terbaru seputar kegiatan-kegiatan yang berlangsung pada SMK Negeri 1 Purwosari"
    >
      <div className="container  max-w-full">
        <NewsForm />
        <NewsCard />
      </div>
    </InfoLayout>
  );
}
