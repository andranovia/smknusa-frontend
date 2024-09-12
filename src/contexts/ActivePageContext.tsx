"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext } from "react";

export const ActivePageContext = createContext<{
  activePage: boolean | undefined;
}>({ activePage: undefined });

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (context === undefined) {
    throw new Error("useActivePage must be used within an ActivePageProvider");
  }
  return context;
};

export const ActivePageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActivePage =
    pathname === "/" ||
    pathname === "/info/news" ||
    pathname === "/profile/school-facility" ||
    pathname === "/info/article" ||
    pathname === "/academic/extracurricular" ||
    pathname === "/academic/major" ||
    pathname === "/academic/resident-data" ||
    pathname === "/bkk/job" ||
    pathname === "/bkk/partnership" ||
    pathname === "/gallery" ||
    pathname === "/academic/device-form";
  return (
    <ActivePageContext.Provider value={{ activePage: isActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};
