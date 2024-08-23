'use client'

import React, { useState } from "react";
import Link from "next/link";
import ProfileCardItemLoading from "@/components/ui/profile-card-item-loading";
import MajorShowMore from "./major-showmore";
import FeatureCardItem from "@/components/ui/feature-card-item";

export type Major = {
    icon: string,
    img: string,
    title: string,
    description: string,
};


const majorData: Major[] = [
    {
        
            icon: 'Informatika',
        
        img: '/assets/academic/major/rpl-major.png',
        title: 'Rekayasa Perangkat Lunak',
        description: 'Rekayasa Perangkat Lunak adalah sebuah jurusan yang...'
    },
    {
        
            icon: 'Informatika',
        
        img: '/assets/academic/major/tkj-major.png',
        title: 'Teknik Komputer dan Jaringan',
        description: 'Laser Cutting adalah alat yang digunakan untuk...'
    }, {
        
            icon: 'Informatika',
        
        img: '/assets/academic/major/dkv-major.png',
        title: 'Desain Komunikasi Visual',
        description: 'Laser Cutting adalah alat yang digunakan untuk...'
    }, {
        
            icon: 'Agribisnis',
        
        img: '/assets/academic/major/aphp-major.png',
        title: 'Agribisnis Pengolahan Hasil Pertanian',
        description: 'Laser Cutting adalah alat...'
    }, {
        
            icon: 'Agribisnis',
        
        img: '/assets/academic/major/atph-major.png',
        title: 'Agribisnis Tanaman Pangan dan Hortikultura',
        description: 'Laser Cutting adalah alat...'
    }, {
        
            icon: 'Elektronika',
        
        img: '/assets/academic/major/mkt-major.png',
        title: 'Teknik Mekatronika',
        description: 'Laser Cutting adalah alat yang digunakan untuk...'
    }, {
        
            icon: 'Permesinan',
        
        img: '/assets/academic/major/tl-major.png',
        title: 'Teknik Pengelasan',
        description: 'Laser Cutting adalah alat yang digunakan untuk...'
    }, {
        
            icon: 'Permesinan',
        
        img: '/assets/academic/major/tpm-major.png',
        title: 'Teknik Pemesinan',
        description: 'Laser Cutting adalah alat yang digunakan untuk...'
    }, {
        
            icon: 'Permesinan',
        
        img: '/assets/academic/major/tkro-major.png',
        title: 'Teknik Kendaraan Ringan Otomotif',
        description: 'Laser Cutting adalah alat...'
    }, {
        
            icon: 'Permesinan',
        
        img: '/assets/academic/major/tkro-major.png',
        title: 'Teknik Kendaraan Ringan Otomotif',
        description: 'Laser Cutting adalah alat...'
    },
];

const MajorCard = () => {
    const [showAllMajor, setShowAllMajor] = useState(false);

    return (
        <div className="w-full flex justify-center items-center bg-white px-2 xl:mt-0">
            {majorData ? (
                <div className="flex flex-col items-center w-full">
                  <div className="w-full lg:w-fit grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
                        {majorData
                            .slice(0, showAllMajor ? majorData.length : 9)
                            .map((major, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Link href={`/major/${index}`} className="flex justify-center">
                                            <FeatureCardItem featureCardData={major} />
                                        </Link>
                                    </React.Fragment>
                                );
                            })}
                    </div>
                    <MajorShowMore
                        showAllMajor={showAllMajor}
                        setShowAllMajor={setShowAllMajor}
                    />
                </div>
            ) : (
                <div className="w-full 1xl:w-fit grid grid-cols-1 lg:grid-cols-2 1xl:grid-cols-3 gap-4 md:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <React.Fragment key={index}>
                                <ProfileCardItemLoading />
                            </React.Fragment>
                        ))}
                </div>
            )}
        </div>
    )
}

export default MajorCard;