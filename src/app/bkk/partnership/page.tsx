import PartnershipCard from '@/components/bkk/partnership/partnership-card'
import PartnershipForm from '@/components/bkk/partnership/partnership-form'
import InfoLayout from '@/layouts/info-layout'
import { ClientOnly } from '@/utils/isClient'
import React from 'react'

const Partnership = () => {
    return (
        
        <ClientOnly>
            <InfoLayout title="Kemitraan" subtitle="Daftar kemitraan SMK Negeri 1 Purwosari">
                <div className="pb-20  flex flex-col items-center w-full justify-center gap-10  md:max-w-md-content lg:max-w-lg-content xl:max-w-[1002px] 2xl:max-w-max-container ">
                <PartnershipForm/>
                <PartnershipCard/>
                </div>
            </InfoLayout>
        </ClientOnly>
    )
}

export default Partnership