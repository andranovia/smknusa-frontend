import React from "react";

const HomeHero = () => {
  return (
    <section className="flex justify-center items-center bg-gray-base mt-[4.2rem] xl:mt-0 overflow-hidden relative w-full h-full">
      <div className="absolute hidden xl:block top-0 bg-gradient-to-b w-full from-black opacity-40 to-transparent p-10"></div>

      <div className="relative w-full h-[180px] xs:h-[230px] sm:h-[270px] md:h-[320px] lg:h-[400px] xl:h-[720px] 1xl:h-[800px] 2xl:h-[900px] aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/QFmzVPw8pOs?autoplay=1&controls=0&loop=1&playlist=QFmzVPw8pOs"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default HomeHero;
