"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ClientOnly } from "@/utils/isClient";
import InfoLayout from "@/layouts/info-layout";
import TeachingDeviceForm from "@/components/academic/device/device-form";
import TeachingDeviceCard from "@/components/academic/device/device-card";

const Page = () => {
  const [deviceFormFilter, setDeviceFormFilter] = useState({
    search: "",
  });

  useEffect(() => {
      const lenis = new Lenis();
  
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);

  return (
    <ClientOnly>
      <InfoLayout
        title="Form Perangkat Ajar"
        subtitle="Kami menyediakan informasi pendidikan dan kegiatan akademik terkini"
      >
        <div className="pb-20  flex flex-col items-center w-full justify-center gap-10  md:max-w-md-content lg:max-w-lg-content xl:max-w-[932px] 2xl:max-w-max-container ">
          <TeachingDeviceForm
            deviceFormFilter={deviceFormFilter}
            setDeviceFormFilter={setDeviceFormFilter}
          />
          <TeachingDeviceCard deviceFormFilter={deviceFormFilter} />
        </div>
      </InfoLayout>
    </ClientOnly>
  );
};

export default Page;
