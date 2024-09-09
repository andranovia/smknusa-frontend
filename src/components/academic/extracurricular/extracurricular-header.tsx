import React from "react";
import { Heading } from "@/components/ui/typography";

const ExtracurricularHeader = () => {
  return (
    <div className="flex xl:justify-between xl:flex-row flex-col items-center w-full px-6 1xl:px-14  place-self-center max-w-[1264px] ">
      <Heading type="h5" className="xl:w-1/3  my-10">
        Kami memiliiki beberapa ekstrakurikuler yang dapat menunjang kebutuhan siswa.
      </Heading>
    </div>
  );
};

export default ExtracurricularHeader;
