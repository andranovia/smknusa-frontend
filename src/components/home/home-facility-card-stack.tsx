import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facility } from "@/services/api/useQueries/useFacilities";
import { backendUrl } from "@/utils/backendUrl";

type HomeFacilityCardStackProps = {
  items: Facility[];
  offset?: number;
  scaleFactor?: number;
  isChangingSlide?: boolean;
};

const HomeFacilityCardStack: React.FC<HomeFacilityCardStackProps> = ({
  items,
  isChangingSlide,
  offset = 10,
  scaleFactor = 0.06,
}) => {
  const [cards, setCards] = useState<Facility[]>(items);

  useEffect(() => {
    setTimeout(() => {
      setCards(items);
    }, 350);
    if (!isChangingSlide) {
      const interval = setInterval(() => {
        setTimeout(() => {
          setCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards.unshift(updatedCards.pop()!);
            return updatedCards;
          });
        }, 400);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isChangingSlide, items]);

  const cardMotionStyles = (index: number) => ({
    top: index * -offset,
    scale: 1 - index * scaleFactor,
    y: index === 0 ? [0, 500, 0] : 0,
    zIndex: cards.length - index,
  });

  const cardTransitionSettings = {
    duration: 1.15,
    ease: "easeInOut",
    zIndex: { delay: 0.6 },
  };

  return (
    <div className="relative  h-full min-h-64 sm:min-h-72 w-full max-w-[274px] xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-container">
      {cards?.map((card, index) => (
        <motion.div
          key={card?.id_facility}
          className="absolute w-full h-full flex flex-col justify-end items-center "
          style={{ transformOrigin: "top center" }}
          animate={cardMotionStyles(index)}
          transition={cardTransitionSettings}
          initial={false}
        >
          <Image
            src={backendUrl + card?.facility_image}
            alt="card-content-img"
            width={1000}
            height={1000}
            className="absolute w-full h-full object-cover rounded-lg"
          />
          <div className="relative z-20 text-center text-white -top-10 flex items-center flex-col justify-center">
            <p className="font-[700] xl:text-[20px]">{card?.facility_name}</p>
            <p className="font-[500] xl:text-[14px] text-xs line-clamp-1 w-2/4">
              {card?.facility_text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeFacilityCardStack;
