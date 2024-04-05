"use client";

import HomeHero from "@/components/home/home-hero";
import HomeMajor from "@/components/home/home-major";
import HomeSlider from "@/components/home/home-slider";
import HomeFacility from "@/components/home/home-facility";
import HomeNews from "@/components/home/home-news";
import HomeEnterpreneur from "@/components/home/home-enterpreneur";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HomeHero />
      <HomeSlider />
      <div className="px-3">
      <HomeMajor />
      <HomeFacility />
      <HomeEnterpreneur />
      <HomeNews />
      </div>
    </main>
  );
}
