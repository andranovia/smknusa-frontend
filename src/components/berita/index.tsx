import Image from 'next/image';
import React from 'react'

const NewsHero = () => {
  return (
    <>
      <div className="relative lg:w-full lg:h-[80%]">
      <div className="relative">
        <Image
          src={"/assets/smkn1purwosari.svg"}
          alt='smknusa'
          width={1420}
          height={518}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white lg:mt-[11em]">
          <h1 className="text-4xl mb-4 font-[700] text-[46px]">Berita-Berita SMK</h1>
          <p className="text-lg text-center font-[600] text-[18px]">Update informasi terbaru seputar kegiatan-kegiatan yang berlangsung pada SMK Negeri 1 Purwosari</p>
        </div>
      </div>
    </div>
    </>
 )
}

export default NewsHero;
