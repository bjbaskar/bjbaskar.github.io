import { FC } from "react";
import Image from "next/image";

const KuralCard: FC = () => {
  return (
    <div className="lg:min-h-[50vh] px-[5vw] pt-[80px] flex flex-col items-center justify-center z-[4]">
      <a
        href="//thirukkural.bjbaskar.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          className="text-center text-2xl lg:text-3xl"
        >
          https://thirukkural.bjbaskar.com/
        </h1>

        <div
          className="mt-8 flex flex-col rounded-lg bg-white 
      shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row
      hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md
      "
        >
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              {/* Thirukkural */}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              I own a platform solely dedicated to Thirukkural, where I spend my
              leisure time implementing technological enhancements and exploring
              innovative ideas.
              <br />
              <br /> The T H I R U K K U R A L website is a personal project of
              mine, and I dedicate my weekends to its continuous development and
              improvement.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              I trust you have had a pleasant experience exploring my website.
              <br />
              <br />
              Wishing you all the best!
            </p>
          </div>

          <Image
            className="w-1/2 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg self-center"
            src="/thiruvalluvar_pic.jpg"
            alt="bjbaskar"
            width={96}
            height={96}
          />
        </div>
      </a>
    </div>
  );
};

export default KuralCard;
