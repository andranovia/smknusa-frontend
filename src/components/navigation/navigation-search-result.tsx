import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { defaultTransition } from "../animation/transition";
import { Heading } from "../ui/typography";
import NavigationSearchItem from "./navigation-search-item";

const NavigationSearchResult = ({
  searchToggle,
  setSearchToggle,
}: {
  searchToggle: boolean;
  setSearchToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [searchRecent, setSearchRecent] = useState([]);

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
        className={`flex absolute z-50 flex-col w-[80%] sm:w-[23rem] md:w-[26rem] xl:w-[35rem] top-[12rem]  bg-[#F7F7F7] transition-all rounded-[10px]  py-4 gap-4 `}
      >
        <motion.div
          animate={{
            y: searchToggle ? 0 : 40,
          }}
          transition={defaultTransition}
          className="w-full  flex justify-between items-center gap-4  px-4 "
        >
          <div className="flex justify-start items-center gap-4 ">
            <Image
              src={"/assets/icon/search.svg"}
              alt="search"
              className={`invert w-5 h-5 `}
              width={22}
              height={22}
            />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Ketikkan kata kunci"
              className={`focus:outline-none  hidden 2xl:block placeholder:font-[500] placeholder:text-sm bg-transparent placeholder:text-gray-light`}
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
          <Heading type="h5" className="font-[500] text-sm text-gray-light">
            Disarankan
          </Heading>
          {[...Array(3)].map((_, index) => (
            <motion.div
              animate={{
                y: searchToggle ? 0 : 20,
                opacity: searchToggle ? 1 : 0,
              }}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              key={index}
            >
              <NavigationSearchItem
                imgSrc="/assets/nav-dropdown-icon/akademik/ekstrakulikuler.svg"
                title="Ekstrakulikuler"
              />
            </motion.div>
          ))}
        </div>
        <hr />
        <div className="w-full  flex flex-col justify-start gap-4  px-4 text-blue-base">
          <Heading type="h5" className="font-[500] text-sm text-gray-light">
            Riwayat
          </Heading>
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
