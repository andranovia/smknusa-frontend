
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
};

const HomeFacilityCardStack: React.FC<HomeFacilityCardStackProps> = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}) => {
  const [cards, setCards] = useState<Card[]>(items);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("nextCard");
      setTimeout(() => {
        setCards((prevCards) => {
          const updatedCards = [...prevCards];
          updatedCards.unshift(updatedCards.pop()!);
          return updatedCards;
        });
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

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
    <div className="relative h-40 w-72 lg:w-full lg:h-full">
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
            <p className="font-[700] lg:text-[20px]">{card.name}</p>
            <p className="font-[500] lg:text-[14px] text-xs">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeFacilityCardStack;
