import HomeHero from "@/components/home/home-hero";
import HomeMajor from "@/components/home/home-major";
import HomeSlider from "@/components/home/home-slider";
import HomeFacility from "@/components/home/home-facility";
import HomeAnnouncement from "@/components/home/home-announcements";
import HomeEntrepreneur from "@/components/home/home-entrepreneur";
import { ClientOnly } from "@/utils/isClient";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-3">
      <HomeHero />
      <HomeSlider />
      <div className="px-1 lg:px-3 flex flex-col items-center gap-3">
        <HomeAnnouncement />
        <HomeMajor />
        <ClientOnly>
          <HomeFacility />
        </ClientOnly>
        <HomeEntrepreneur />
      </div>
    </div>
  );
}
