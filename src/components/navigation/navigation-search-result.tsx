import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSearches } from "@/services/api/useQueries/useSearches";
import { defaultTransition } from "../animation/transition";
import { Heading, Paragraph } from "../ui/typography";
import NavigationSearchItem from "./navigation-search-item";
import SearchResultItemLoading from "../ui/search-result-item-loading";

const NavigationSearchResult = ({
  searchToggle,
  setSearchToggle,
}: {
  searchToggle: boolean;
  setSearchToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searches, isSearchLoading } = useSearches({ query: searchQuery });
  // const [searchRecent, setSearchRecent] = useState([]);

  useEffect(() => {
    if (!searchToggle) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchToggle(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [searchToggle, setSearchToggle]);

  const getResultItemIcon = (iconType: string) => {
    switch (iconType) {
      case "Articles":
        return "/assets/nav-dropdown-icon/info/info.svg";
      case "Announcement":
        return "/assets/nav-dropdown-icon/info/info.svg";
      case "News":
        return "/assets/nav-dropdown-icon/info/info.svg";
      case "Event":
        return "/assets/nav-dropdown-icon/info/info.svg";
      case "Ekstra":
        return "/assets/nav-dropdown-icon/akademik/ekstrakulikuler.svg";
      case "Faculty":
        return "/assets/nav-dropdown-icon/profile/fasilitas.svg";
      case "Gallery":
        return "/assets/nav-dropdown-icon/info/info.svg";
      case "Jurusan":
        return "/assets/nav-dropdown-icon/akademik/jurusan.svg";
      case "Pa":
        return "/assets/nav-dropdown-icon/akademik/form-pa.svg";
      case "PD":
        return "/assets/nav-dropdown-icon/akademik/data-warga.svg";
      case "PTK":
        return "/assets/nav-dropdown-icon/akademik/data-warga.svg";
      case "Kemitraan":
        return "/assets/nav-dropdown-icon/bkk/kemitraan.svg";
      case "lokers":
        return "/assets/nav-dropdown-icon/bkk/lowongan.svg";
      default:
        return "/assets/nav-dropdown-icon/info/info.svg";
    }
  };

  const getResultItemLink = (iconType: string) => {
    switch (iconType) {
      case "Articles":
        return "/info/article";
      case "Announcement":
        return "/info/announcements";
      case "News":
        return "/info/news";
      case "Event":
        return "/info/events";
      case "Ekstra":
        return "/academic/extracurricular";
      case "Faculty":
        return "/profile/school-facility";
      case "Gallery":
        return "/gallery";
      case "Jurusan":
        return "/academic/major";
      case "Pa":
        return "/academic/device-form";
      case "PD":
        return "/academic/resident-data";
      case "PTK":
        return "/academic/resident-data";
      case "Kemitraan":
        return "/bkk/partnership";
      case "lokers":
        return "/bkk/job";
      default:
        return "/";
    }
  };

  return (
    <div
      className={`w-full h-full flex items-center justify-center z-50 fixed ${
        searchToggle ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <motion.div
        onClick={() => setSearchToggle(!searchToggle)}
        initial={{ opacity: 0 }}
        animate={{
          opacity: searchToggle ? 1 : 0,
          pointerEvents: searchToggle ? "auto" : "none",
        }}
        className="z-40 w-full h-full absolute bg-opacity-40 bg-primary backdrop-blur-sm"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: searchToggle ? 1 : 0,
        }}
        transition={defaultTransition}
        className={`flex absolute z-50 flex-col w-[94%] sm:w-[23rem] md:w-[26rem] xl:w-[35rem] top-[12rem]  bg-[#F7F7F7] transition-all rounded-[10px]  py-4 gap-4 `}
      >
        <motion.div
          animate={{
            y: searchToggle ? 0 : 40,
          }}
          transition={defaultTransition}
          className="w-full  flex justify-between items-center gap-4  px-4 "
        >
          <div className="flex justify-start items-center gap-4 w-full">
            <Image
              src={"/assets/icon/search.svg"}
              alt="search"
              className={`invert w-5 h-5 `}
              width={22}
              height={22}
            />
            <input
              type="text"
              name="query"
              id="query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketikkan kata kunci"
              className={`focus:outline-none w-full block placeholder:font-[500] placeholder:text-sm bg-transparent placeholder:text-gray-light`}
            />
          </div>
          <div
            onClick={() => setSearchToggle(false)}
            className="rounded-[10px] font-bold px-3 py-2 bg-gray-base text-blue-base text-xs cursor-pointer"
          >
            ESC
          </div>
        </motion.div>
        <hr />

        <div className="w-full  flex flex-col justify-start gap-4  px-4 text-blue-base">
          <Heading
            type="h5"
            className="font-[500]text-xs xl:text-[16px] text-gray-light"
          >
            Disarankan
          </Heading>
          {searches && !isSearchLoading ? (
            searches?.slice(0, 4).map((data, index) => {
              return (
                <Link
                  href={
                    getResultItemLink(data?.icon_type) +
                    `/${
                      data?.id_pemberitahuan ||
                      data?.id_extra ||
                      data?.id_gallery ||
                      data?.id_facility ||
                      data?.id_jurusan ||
                      data?.id_loker ||
                      data?.id_pa ||
                      data?.id ||
                      data?.id_kemitraan
                    }`
                  }
                  key={index}
                >
                  <motion.div
                    onClick={() => setSearchToggle(false)}
                    animate={{
                      y: searchToggle ? 0 : 20,
                      opacity: searchToggle ? 1 : 0,
                    }}
                    transition={{ ...defaultTransition, delay: index * 0.1 }}
                  >
                    <NavigationSearchItem
                      imgSrc={getResultItemIcon(data?.icon_type)}
                      title={
                        data?.nama ||
                        data?.facility_name ||
                        data?.gallery_title ||
                        data?.jurusan_nama ||
                        data?.title ||
                        data?.kemitraan_name ||
                        data?.loker_type
                      }
                      description={
                        data?.text ||
                        data?.extra_text ||
                        data?.facility_text ||
                        data?.gallery_text ||
                        data?.jurusan_text ||
                        data?.description ||
                        data?.kelas ||
                        data?.nip ||
                        data?.kemitraan_description ||
                        data?.kemitraan_id
                      }
                    />
                  </motion.div>
                </Link>
              );
            })
          ) : (
            <SearchResultItemLoading />
          )}
        </div>
        <hr />
        <div className="w-full  flex flex-col justify-start gap-4  px-4 text-blue-base">
          <Heading
            type="h5"
            className="font-[500] text-xs xl:text-[16px]  text-gray-light"
          >
            Riwayat
          </Heading>
          <Paragraph className="text-center  my-6 text-xs sm:text-sm xl:text-lg text-gray-light">
            Tidak ada riwayat pencarian
          </Paragraph>
          {/* {searchRecent.length > 0 ? (
                        <React.Fragment>
                            {searchRecent.map((item, index) => (
                                <React.Fragment key={index}>
                                    <NavigationSearchItem imgSrc="/assets/nav-dropdown-icon/akademik/ekstrakulikuler.svg" title="Ekstrakulikuler" />
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ) : (
                        <Paragraph className="text-center  my-6 text-sm sm:text-base xl:ltext-lg text-gray-light">Tidak ada riwayat pencarian</Paragraph>
                    )} */}
        </div>
      </motion.div>
    </div>
  );
};

export default NavigationSearchResult;
