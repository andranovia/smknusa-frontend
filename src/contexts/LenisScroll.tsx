"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    const onAnimationFrame = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(onAnimationFrame);
    };
    requestAnimationFrame(onAnimationFrame);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
