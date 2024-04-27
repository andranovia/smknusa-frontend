import HomeHero from "@/components/home/home-hero";
import HomeMajor from "@/components/home/home-major";
import HomeSlider from "@/components/home/home-slider";
import HomeFacility from "@/components/home/home-facility";
import HomeNews from "@/components/home/home-news";
import HomeEnterpreneur from "@/components/home/home-enterpreneur";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HomeHero />
      <HomeSlider />
      <div className="px-1 lg:px-3">
        <HomeMajor />
        <HomeFacility />
        <HomeEnterpreneur />
        <HomeNews />
      </div>
    </main>
  );
}
