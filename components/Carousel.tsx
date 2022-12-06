import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { carouselData } from "../data";

let count: number = 0;
let slideInterval: any;

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleOnNextClick = () => {
    count = (count + 1) % carouselData.length;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = carouselData.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add("fade-anim");
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  useEffect(() => {
    startSlider();
    slideRef.current?.addEventListener("animationend", removeAnimation);
    slideRef.current?.addEventListener("mouseenter", pauseSlider);
    slideRef.current?.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-anim");
  };

  return (
    <Fragment>
      <div
        ref={slideRef}
        className="flex w-full mx-auto items-center justify-center"
      >
        <Image
          src={carouselData[currentIndex].images}
          alt={carouselData[currentIndex].title}
          className="rounded-md w-full md:max-w-[75%]"
          width={500}
          height={75}
        />

        {/* <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button
            className="carousel-control absolute top-0 bottom-0 
            flex items-center justify-center p-0 text-center border-0 
            hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            onClick={handleOnPrevClick}
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
              style={{
                width: "2rem",
                height: "2rem",
                backgroundPosition: "50%",
                backgroundSize: "100% 100%",
                backgroundImage:
                  'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#8b1212"><path d="M11.354 1.646a.5.5.0 010 .708L5.707 8l5.647 5.646a.5.5.0 01-.708.708l-6-6a.5.5.0 010-.708l6-6a.5.5.0 01.708.0z" /></svg>)',
              }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control absolute top-0 bottom-0 
            flex items-center justify-center p-0 text-center border-0 
            hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            onClick={handleOnNextClick}
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Carousel;
