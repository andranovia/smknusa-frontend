import NewsCard from "@/components/news/news-card";
import NewsForm from "@/components/news/news-form";
import InfoLayout from "@/layouts/info-layout";
import { ClientOnly } from "@/utils/isClient";

export default function News() {
  return (
    <ClientOnly>
      <InfoLayout
        title="Berita-Berita SMK"
        className=""
        subtitle="Update informasi terbaru seputar kegiatan-kegiatan yang berlangsung pada SMK Negeri 1 Purwosari"
      >
        <div className="w-full max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-full bg-white">
          <NewsForm />
          <NewsCard />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
}
