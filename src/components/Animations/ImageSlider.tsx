import { CSSProperties, useState } from "react";
import * as Icon from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { calcClamp } from "@/data/Utils";

interface ImageSliderProps {
  arr: string[];
  translateYMiddleImg: number;
  ImgWidth: number | string;
  ImgHeight: number | string;
  imgStyle?: CSSProperties;
  imgClassName?: string;
  buttonsClassName?: string;
  ButtonStyle?: string;
  className?: string;
}

const ImageSlider = ({
  arr,
  translateYMiddleImg: translateYMiddle,
  imgClassName,
  buttonsClassName,
  imgStyle,
  ButtonStyle,
  className,
}: ImageSliderProps) => {
  const [startIndex, setStartIndex] = useState(arr.length % 2);
  const visibleCount = 17;

  let extendedArr = [...arr];

  while (extendedArr.length < 5) {
    extendedArr = [...extendedArr, ...arr];
  }

  const next = () => {
    setStartIndex((prev) => prev + 1);
  };

  const prev = () => {
    setStartIndex((prev) => prev - 1);
  };

  const mod = (n: number, m: number): number => ((n % m) + m) % m;

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = mod(startIndex + i, extendedArr.length);
    visibleImages.push(extendedArr[index]);
  }

  return (
    <motion.div
      layout
      className={`${className} flex flex-col w-full pb-1 justify-center items-center overflow-hidden `}
      style={{ paddingTop: `${translateYMiddle}px` }}
    >
      <motion.div layout className='flex gap-4 justify-center'>
        <AnimatePresence>
          {visibleImages.map((item, idx) => {
            const isMiddle = idx === Math.floor(visibleCount / 2);

            return (
              <motion.img
                layout
                key={startIndex + idx}
                initial={{ x: isMiddle ? 80 : 0 }}
                animate={{ y: isMiddle ? -translateYMiddle : 0, x: 0 }}
                src={item}
                alt='Rebranding'
                className={cn(
                  `shrink-0 ${!isMiddle && "brightness-75"} object-cover aspect-video`,
                  imgClassName,
                )}
                style={{
                  width: `clamp(${calcClamp(250, 564)})`,
                  height: "auto",
                  ...imgStyle,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div
        className={cn("flex justify-between", buttonsClassName)}
        style={{
          marginTop: `-${translateYMiddle / 1.3}px`,
          width: `clamp(${calcClamp(250, 564)})`,
        }}
      >
        <button
          onClick={prev}
          style={{
            width: `clamp(${calcClamp(28, 64)})`,
            height: `clamp(${calcClamp(28, 64)})`,
          }}
          className={`flex-center p-3 rounded-full ${ButtonStyle} shrink-0 z-50 hover:opacity-90 transition-opacity cursor-pointer max-768:p-2`}
        >
          <Icon.ArrowLeft className='size-full' />
        </button>

        <button
          onClick={next}
          style={{
            width: `clamp(${calcClamp(28, 64)})`,
            height: `clamp(${calcClamp(28, 64)})`,
          }}
          className={`flex-center p-3 rounded-full ${ButtonStyle} shrink-0 z-50 hover:opacity-90 transition-opacity cursor-pointer max-768:p-2`}
        >
          <Icon.ArrowRight className='size-full' />
        </button>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
