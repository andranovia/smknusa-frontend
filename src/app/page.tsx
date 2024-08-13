import HomeHero from "@/components/home/home-hero";
import HomeMajor from "@/components/home/home-major";
import HomeSlider from "@/components/home/home-slider";
import HomeFacility from "@/components/home/home-facility";
import HomeAnnouncement from "@/components/home/home-announcements";
import HomeEntrepreneur from "@/components/home/home-entrepreneur";
import { ClientOnly } from "@/utils/isClient";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HomeHero />
      <HomeSlider />
      <div className=" px-2 xl:px-2.5 flex flex-col w-full items-center gap-3 mt-3">
        <ClientOnly>
        <HomeAnnouncement />
        </ClientOnly>
        <HomeMajor />
        <ClientOnly>
          <HomeFacility />
        </ClientOnly>
        <HomeEntrepreneur />
      </div>
    </div>
  );
}
