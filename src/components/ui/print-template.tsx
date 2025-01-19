"use client";

import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMetadata } from "@/utils/useMetadata";
import { backendUrl } from "@/utils/backendUrl";

interface Details {
    nama: string;
    text?: string;
    category: {
        color: string;
        nama: string;
    }
    date?: string;
    thumbnail: string;
    jurnal_by?: string;
    published_by?: {
        name: string;
    }
    location?: string;
    created_at?: string;
}

const PrintTemplate = ({ details, type }: { details: Details; type: string }) => {
  const [sourceUrl, setSourceUrl] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    if(source) setSourceUrl(decodeURIComponent(source));
  }, [])

  const sanitizedHtml = details?.text
    ? DOMPurify.sanitize(details.text, {
        FORBID_TAGS: ["img", "style", "b", "i", "strong", "em", "u", "font"],
        FORBID_ATTR: ["style"],
      })
    : "";

    useMetadata(
        details?.nama || "News" || "Events" || "Announcement" || "Article",
        ``
    )

    const date = details && details.created_at ? new Date(details?.created_at) : null;
    const normalDate = date ? date.toLocaleDateString("id-ID") : "";

  const parsedHtml = parse(sanitizedHtml);

  return (
    <div className="pt-[2rem] bg-white px-2 xl:px-3 flex justify-center items-center w-full print-container">
      <div className="w-full rounded-[10px] text-blue-base flex justify-center">
        <div className="relative rounded-[10px] flex flex-col items-center xl:gap-20 pt-4 lg:pt-10 pb-20 px-4 gap-0 max-w-full md:max-w-md-content lg:max-w-lg-content xl:max-w-full 2xl:max-w-max-content w-full">
          <div className="flex flex-col gap-0 xl:gap-6 w-full xl:w-[82%]">
            
            <h1 className="font-[700] lg:text-4xl xl:text-[46px] xl:leading-[3rem] text-2xl text-start tracking-wide">
              {details?.nama || "Judul Tidak Tersedia"}
            </h1>

            
            <div className="flex xl:flex-row flex-col xl:my-0 my-6 gap-4 xl:gap-8 justify-between items-start w-full uppercase">
                <div className="flex items-start gap-4">
                    <div className="flex gap-1 items-center text-xs xs:text-sm">
                    <p className="font-medium text-gray">Diposting pada :</p>
                    <h4 className="font-semibold"> {normalDate}</h4>
                    </div>
                    {details?.location && (
                      <div className="flex gap-1 items-center text-xs xs:text-sm">
                        <p className="font-medium text-gray">location :</p>
                        <h4 className="font-semibold">{details?.location}</h4>
                      </div>
                    )}
                </div>

                <div className="flex items-start gap-4">
                    {details?.category && (
                        
                        <p className="font-[500] text-xs xs:text-sm text-black text-center">
                            {details?.category?.nama || "Kategori Tidak Tersedia"}
                        </p>
                    )}
                    <div className="flex gap-1 items-center">
                        <h3 className="font-medium text-xs xs:text-sm text-gray">
                         publikasi :
                        </h3>
                        <h4 className="font-semibold text-xs xs:text-sm">{details?.published_by?.name}</h4>
                    </div>
                </div>
            </div>
            
          <hr className="w-full border" />

          </div>

          
          {details?.thumbnail && (
            <div className="flex flex-col items-center gap-8 w-full xl:w-[82%]">
              <div className="w-full max-h-[17rem] md:max-h-[20rem] rounded-[10px] lg:max-h-[30rem] xl:max-h-[40rem] overflow-hidden">
                <Image
                  src={backendUrl + details.thumbnail}
                  alt="thumbnail"
                  className="w-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          )}

          
          <div className="flex xl:flex-row flex-col justify-center items-center gap-10 xl:gap-20 w-full text-center">
            <div className="w-full flex flex-col gap-10 xl:w-[82%]">
              <div className="flex flex-col items-start gap-10 font-[500] text-[18px] text-black w-full">
                <span className="flex flex-col text-start gap-2">
                  {parsedHtml || "Konten Tidak Tersedia"}
                </span>

                <span className="text-black">Jurnalis : {details?.jurnal_by}</span>
              </div>
              {type !== "announcement" && type !== "event" && (
                <hr className="w-full border" />
              )}
                <span className="text-start font-[500] text-[18px] text-black"> Sumber : {sourceUrl}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintTemplate;
