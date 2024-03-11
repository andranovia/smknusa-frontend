import HomeHero from "@/components/home/home-hero";
import HomeSlider from "@/components/home/home-slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HomeHero />
      <HomeSlider />
    </main>
  );
}
