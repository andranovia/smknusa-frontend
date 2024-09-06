"use client";

import React, { useState } from "react";
import DeviceShowMore from "./device-showmore";
import DeviceFormCardItem from "@/components/ui/device-form-card-item";

const dataMaterials = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "2.45 MB",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "1.20 MB",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "3.75 MB",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "3.75 MB",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "3.75 MB",
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "3.75 MB",
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "3.75 MB",
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque in aliquet sed aliquet tellus eu metus. Senectus ut tristique lorem tellus.",
        imageUrl: "/assets/academic/device-form/folder.png",
        fileArchive: "2.00 MB",
        fileSize: "3.75 MB",
    },
]

const TeachingDeviceCard = () => {
    const [showAllDevice, setShowAllDevice] = useState(false);
    const postsPerPage = 6;

    const currentMaterials = showAllDevice
        ? dataMaterials
        : dataMaterials.slice(0, postsPerPage);

    return (
        <div className="flex flex-col justify-center items-center bg-white rounded-lg">
            <div className="flex justify-center items-center flex-col w-full 2xl:w-auto">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 px-2 lg:px-4 py-4 1xl:px-12 pb-12 bg-white rounded-[10px] w-full">
                    {currentMaterials.map((material, index) => (
                        <React.Fragment key={index}>
                            <DeviceFormCardItem deviceFormData={material} />
                        </React.Fragment>
                    ))}
                </div>
                <div className="mt-4 mb-12">
                    <DeviceShowMore
                        setShowAllDevice={setShowAllDevice}
                        showAllDevice={showAllDevice}
                    />
                </div>
            </div>
        </div>
    )
}

export default TeachingDeviceCard