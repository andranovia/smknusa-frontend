
import React from "react";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/utils/cn";

type ProfileLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
};

const ProfileLayout = ({
  title,
  subtitle,
  children,
  className,
}: ProfileLayoutProps) => {
  return (
    <div className="w-full pt-20 xl:pt-24 px-3 min-h-screen rounded-[10px] text-blue-base">
      <div className="relative bg-white min-h-screen flex flex-col items-center pt-10 pb-20">
        <div className="flex flex-col xl:items-center gap-4 w-[80%] xl:w-2/3 xl:text-center">
          <Heading type="h1" className="">
            {title}
          </Heading>
          <Heading type="h5" className="text-gray">
            {subtitle}
          </Heading>
          <hr className="w-full border mt-8" />
        </div>
        <div className={cn(`flex flex-col items-center gap-10 xl:gap-20 w-[80%]`, className)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
