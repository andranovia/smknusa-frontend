import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type Card = {
  id: number;
  name: string;
  designation: string;
  contentImg: string;
};

export const HomeFacilityCardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("nextCard");
      setTimeout(() => {
        setCards((prevCards: Card[]) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!);
          return newArray;
        });
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-60 w-60 lg:w-full lg:h-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute h-60 w-60 lg:w-full lg:h-full flex flex-col justify-end items-center"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            y: index === 0 ? [0, 500, 0] : 0,
            zIndex: cards.length - index,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            zIndex: { delay: 0.5 },
          }}
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
            <p className="font-[700] text-[20px] ">{card.name}</p>
            <p className="font-[500] text-[14px]">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
