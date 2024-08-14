'use client';

import { usePathname } from "next/navigation";
import React, { createContext, useContext } from "react";

export const ActivePageContext = createContext<{activePage: boolean | undefined}>(
  {activePage: undefined}
);

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (context === undefined) {
    throw new Error(
      "useActivePage must be used within an ActivePageProvider"
    );
  }
  return context;
};

export const ActivePageProvider = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname()
  const isActivePage =
    pathname === "/" ||
    pathname === "/news" ||
    pathname === "/profile/school-facility" ||
    pathname === "/article" ||
    pathname === "/academic/extracurricular";
  return (
    <ActivePageContext.Provider value={{activePage: isActivePage}}>
      {children}
    </ActivePageContext.Provider>
  );
};