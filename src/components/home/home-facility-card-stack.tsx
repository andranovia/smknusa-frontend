
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type Card = {
  id: number;
  name: string;
  designation: string;
  contentImg: string;
};

type HomeFacilityCardStackProps = {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  isChangingSlide?: boolean
};

const HomeFacilityCardStack: React.FC<HomeFacilityCardStackProps> = ({
  items,
  isChangingSlide,
  offset = 10,
  scaleFactor = 0.06,
}) => {
  const [cards, setCards] = useState<Card[]>(items);
  useEffect(() => {
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
  }, [isChangingSlide]);
  

  const cardMotionStyles = (index: number) => ({
    top: index * -offset,
    scale: 1 - index * scaleFactor,
    y: index === 0 ? [0, 500, 0] : 0,
    zIndex: cards.length - index,
  });

  const cardTransitionSettings = {
    duration: 1,
    ease: "easeInOut",
    zIndex: { delay: 0.5 },
  };

  return (
    <div className="relative  h-full min-h-48 w-full sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 2xl:max-w-max-content">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-full h-full flex flex-col justify-end items-center"
          style={{ transformOrigin: "top center" }}
          animate={cardMotionStyles(index)}
          transition={cardTransitionSettings}
          initial={false}
        >
          <Image
            src={card.contentImg}
            alt="card-content-img"
            width={1000}
            height={1000}
            className="absolute w-full h-full"
          />
          <div className="relative z-20 text-center text-white -top-10">
            <p className="font-[700] xl:text-[20px]">{card.name}</p>
            <p className="font-[500] xl:text-[14px] text-xs">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeFacilityCardStack;
