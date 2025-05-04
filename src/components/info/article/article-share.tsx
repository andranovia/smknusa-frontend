"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Paragraph } from "../../ui/typography";
import { defaultTransition } from "../../animation/transition";

const ArticleShare = () => {
  const [isShareDropdown, setisShareDropdown] = useState(false);
  const [buttonText, setButtonText] = useState("Salin Tautan");

  const copyToClipboard = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setButtonText("Tersalin");
        setTimeout(() => {
          setButtonText("Salin Tautan");
        }, 2000);
      })
      .catch((err) => {
        console.error("Copy error:", err);
      });
  };

  const handleShare = (platform: string) => {
    const currentUrl = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=Check%20this%20out!`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${currentUrl}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      const urlParts = currentUrl.split("/");
      const id = urlParts[urlParts.length - 1];
      const articles = urlParts[urlParts.length - 2];

      sessionStorage.setItem("returnUrl", currentUrl);

      const newUrl = `${urlParts[0]}//${
        urlParts[2]
      }/print/${articles}/${id}?source=${encodeURIComponent(currentUrl)}`;

      window.location.href = newUrl;
    }
  };

  return (
    <div
      className={` inline-flex flex-col items-end relative z-30`}
      onMouseEnter={() => setisShareDropdown(true)}
      onMouseLeave={() => setisShareDropdown(false)}
    >
      <div className="gap-1 items-center flex">
        {" "}
        <Image
          width={20}
          height={20}
          src={"/assets/icon/share.svg"}
          alt="share"
        />
        <h4>Bagikan</h4>
      </div>
      <motion.div
        initial={false}
        animate={{
          opacity: isShareDropdown ? 1 : 0,
          y: isShareDropdown ? 0 : 40,
        }}
        transition={defaultTransition}
        className={` absolute -left-[5rem]  xl:-right-[5rem]  pt-9   ${
          isShareDropdown ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center rounded-lg bg-white w-[10rem] border">
          <div
            className="w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors"
            onClick={() => handleShare("facebook")}
          >
            <Image
              src={"/assets/icon/facebookori.svg"}
              alt={"facebook"}
              width={20}
              height={20}
              className="w-7 h-7 p-1"
            />
            <Paragraph className="text-[12px] font-medium">Facebook</Paragraph>
          </div>
          <div
            className="w-full flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-base transition-colors"
            onClick={() => handleShare("twitter")}
          >
            <Image
              src={"/assets/icon/twitterori.svg"}
              alt={"instagram"}
              width={20}
              height={20}
              className="w-7 h-7 p-1"
            />
            <Paragraph className="text-[12px] font-medium">
              X (Twitter)
            </Paragraph>
          </div>
          <div
            className="w-full flex items-center gap-4 px-4 pb-2 py-2 cursor-pointer hover:bg-gray-base transition-colors"
            onClick={() => handleShare("whatsapp")}
          >
            <Image
              src={"/assets/icon/whatsappori.svg"}
              alt={"whatsapp"}
              width={20}
              height={20}
              className="w-7 h-7 p-1"
            />
            <Paragraph className="text-[12px] font-medium">Whatsapp</Paragraph>
          </div>
          <hr className="border w-[85%]" />
          <div
            className="w-full flex items-center gap-4 px-4 pb-2 py-2 cursor-pointer transition-colors"
            onClick={copyToClipboard}
          >
            <Image
              src={"/assets/icon/link.svg"}
              alt={"whatsapp"}
              width={20}
              height={20}
              className="w-7 h-7 p-1"
            />
            <Paragraph className="text-[12px] font-medium">
              {buttonText}
            </Paragraph>
          </div>
          <div
            className="w-full flex items-center gap-4 px-4 pb-2 py-2 cursor-pointer transition-colors"
            onClick={handlePrint}
          >
            <Image
              src={"/assets/academic/resident-data/print.svg"}
              alt={"print"}
              width={20}
              height={20}
              className="w-7 h-7 p-1 rounded-full border"
            />
            <Paragraph className="text-[12px] font-medium">Cetak</Paragraph>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArticleShare;
