import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Teaching } from "@/services/api/useQueries/useTeaching";
import { Paragraph } from "../../ui/typography";

type DeviceFormCardItemProps = {
  deviceFormData: Teaching;
};

const DeviceFormCardItem = ({ deviceFormData }: DeviceFormCardItemProps) => {
  const downloadFile = ({
    filePath,
    fileName = "Example-PDF-file.pdf",
  }: {
    filePath: string;
    fileName?: string;
  }) => {
    fetch(filePath, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);

        link.click();

        link.parentNode?.removeChild(link);
      });
  };

  return (
    <div
      key={deviceFormData?.id_pa}
      className="flex border p-6 rounded-lg w-full max-w-full"
    >
      <div className="flex-shrink-0 mr-4 hidden lg:block">
        <Image
          src={"/assets/academic/device-form/folder.png"}
          alt="Book file"
          width={70}
          height={70}
          className="mr-4"
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <h3 className="text-[18px] font-[600] text-[#081B34] line-clamp-1 w-[95%]">
          {deviceFormData?.title}
        </h3>
        <div className="flex items-center space-x-4 mt-2 mb-2">
          <div className="flex items-center gap-10">
            <div className="flex items-center">
              <Image
                src="/assets/academic/device-form/archive.svg"
                alt="Archive"
                width={18}
                height={18}
                className="mr-3"
              />
              <span className="text-[12px] text-[#081B34] font-[400]">
                {deviceFormData?.type}
              </span>
            </div>
            {deviceFormData?.type === "file" ? (
              <div className="flex items-center">
                <Image
                  src="/assets/academic/device-form/directbox.svg"
                  alt="Download"
                  width={18}
                  height={18}
                  className="mr-3"
                />
                <span className="text-[12px] text-[#081B34] font-[400]">
                  {deviceFormData?.size} MB
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <Paragraph className="font-[320] text-xs line-clamp-4 text-[#081B34] mb-4 mt-2 w-full md:w-[391px]">
          {deviceFormData?.description}
        </Paragraph>

        {deviceFormData?.type === "file" ? (
          <div className="1xl:flex grid grid-cols-2 w-full gap-3 mt-2">
            <Link href={deviceFormData?.url} className="w-full">
              <button className="bg-primary w-full text-white py-[10px] rounded-md text-xs font-medium">
                Go to file
              </button>
            </Link>
            <button
              onClick={() =>
                downloadFile({
                  filePath:
                    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                })
              }
              className="bg-yellow-light w-full text-blue-base py-[10px] rounded-md  text-xs font-medium"
            >
              Download
            </button>
          </div>
        ) : (
          <Link href={deviceFormData?.url}>
            <button className="bg-primary w-full text-white py-[10px] rounded-md text-xs font-medium">
              Go to Link
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DeviceFormCardItem;
