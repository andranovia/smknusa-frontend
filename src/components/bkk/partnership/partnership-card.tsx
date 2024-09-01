"use client";

import React from "react";
import Link from "next/link";
import { usePartnerships } from "@/services/api/useQueries/usePartnerships";
import ProfileCardItemLoading from "@/components/ui/profile-card-item-loading";
import ProfileCardItem from "@/components/ui/profile-card-item";


const PartnershipCard = () => {
    const { partnerships, isPartnershipsLoading } = usePartnerships();

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white  rounded-lg">
                {partnerships && !isPartnershipsLoading ? (
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full grid grid-cols-1 1xl:w-fit lg:grid-cols-2 1xl:grid-cols-3 gap-4 xl:gap-8 p-4 1xl:px-14 pb-12 bg-white rounded-[10px]">
                            {[...partnerships]?.map((partnership, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Link href={`/bkk/partnership/${partnership.id_kemitraan}`} className="flex justify-center">
                                            <ProfileCardItem profileCardData={partnership} />
                                        </Link>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 1xl:grid-cols-3 gap-4 md:gap-8 w-full 1xl:w-auto p-4 2xl:px-14 pb-12 bg-white rounded-[10px]">
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
        </>
    );
};

export default PartnershipCard;
