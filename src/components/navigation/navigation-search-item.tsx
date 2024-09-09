import React from 'react'
import Image from 'next/image'
import { Paragraph } from '../ui/typography'

const NavigationSearchItem = ({imgSrc, title}: {imgSrc: string, title: string}) => {
  return (
    <div className="flex items-center gap-4">
            <Image
              src={imgSrc}
              alt="suggestion"
              className="w-5 h-5"
              width={22}
              height={22}
            />
            <Paragraph className="font-[500] text-sm  ">
             {title}
            </Paragraph>
          </div>
  )
}

export default NavigationSearchItem