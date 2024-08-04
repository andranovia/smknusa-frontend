
import NewsCard from "@/components/news/news-card";
import NewsForm from "@/components/news/news-form";
import InfoLayout from "@/layouts/info-layout";

export default function Home() {
  return (
    <InfoLayout
      title="Berita-Berita SMK"
      className="container  bg-white max-w-full h-full xl:rounded-lg"
      subtitle="Update informasi terbaru seputar kegiatan-kegiatan yang berlangsung pada SMK Negeri 1 Purwosari"
    >
      <div className="container  max-w-full  md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-full">
        <NewsForm />
        <NewsCard />
      </div>
    </InfoLayout>
  );
}
