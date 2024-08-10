
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
    <div className="w-full flex bg-white xl:bg-gray-base justify-center pt-20 xl:pt-24 px-3 min-h-screen rounded-[10px] text-blue-base">
      <div className="relative bg-white lg:min-h-screen flex flex-col items-center pt-10 pb-20 max-w-max  md:max-w-md-content lg:max-w-lg-content w-full xl:max-w-xl-content 2xl:max-w-max-content">
        <div className="flex flex-col items-center gap-4 w-full xl:w-[80%] xl:text-center">
          <Heading type="h1" className="">
            {title}
          </Heading>
          <Heading type="h5" className="text-gray text-center">
            {subtitle}
          </Heading>
          <hr className="w-full border mt-8" />
        </div>
        <div className={cn(`flex flex-col items-center gap-10 xl:gap-20  xl:w-[80%] w-full`, className)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
