import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Paragraph } from "./typography";

type DeviceFormCardItemProps = {
  deviceFormData: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    fileArchive: string;
    fileSize: string;
  };
};

const DeviceFormCardItem = ({ deviceFormData }: DeviceFormCardItemProps) => {
  return (
    <div key={deviceFormData?.id} className="flex border p-6 rounded-lg w-full">
      <div className="flex-shrink-0 mr-4">
        <Image
          src={deviceFormData?.imageUrl}
          alt="Book file"
          width={70}
          height={70}
          className="mr-4"
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <h3 className="text-[18px] font-[600] text-[#081B34]">
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
                {deviceFormData?.fileArchive}
              </span>
            </div>
            <div className="flex items-center">
              <Image
                src="/assets/academic/device-form/directbox.svg"
                alt="Download"
                width={18}
                height={18}
                className="mr-3"
              />
              <span className="text-[12px] text-[#081B34] font-[400]">
                {deviceFormData?.fileSize}
              </span>
            </div>
          </div>
        </div>
        <Paragraph className="font-[320] text-xs line-clamp-4 text-[#081B34] mb-4 mt-2 w-[391px]">
          {deviceFormData?.description}
        </Paragraph>
        <Link href={`/download/${deviceFormData?.id}`}>
          <button className="bg-yellow-light text-blue-base py-2 px-4 my-2 rounded-lg w-full text-[12px] font-medium">
            Download
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeviceFormCardItem;
