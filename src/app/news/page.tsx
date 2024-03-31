"use client";

import NewsHero from "@/components/berita";
import NewsCard from "@/components/berita/news-card";
import NewsForm from "@/components/berita/news-form";
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
      <NewsHero />
      <div className="container bg-white max-w-full h-full rounded-lg">
      <NewsForm />
      <NewsCard />
      </div>
    </main>
  );
}
