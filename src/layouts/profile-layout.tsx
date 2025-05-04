import React from "react";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/utils/cn";

type ProfileLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  classNameWrapper?: string;
};

const ProfileLayout = ({
  title,
  subtitle,
  children,
  className,
  classNameWrapper,
}: ProfileLayoutProps) => {
  return (
    <div
      className={cn(
        "w-full flex bg-gray-base justify-center  xl:pt-24 min-h-screen rounded-[10px] text-blue-base",
        classNameWrapper
      )}
    >
      <div className="relative bg-white  rounded-md lg:min-h-screen px-3 pt-10 pb-20 w-full flex justify-center">
        <div className="max-w-max  md:max-w-md-content lg:max-w-lg-content  flex flex-col items-center w-full xl:max-w-xl-content 2xl:max-w-max-container">
          <div className="flex flex-col items-center gap-4 w-full xl:text-center ">
            <Heading type="h1" className="text-center">
              {title}
            </Heading>
            <Heading type="h5" className="text-gray text-center ">
              {subtitle}
            </Heading>
            <hr className="w-full border mt-8" />
          </div>
          <div
            className={cn(
              `flex flex-col items-center gap-10 xl:gap-20 w-full`,
              className
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
