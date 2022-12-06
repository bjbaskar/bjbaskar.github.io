import React, { Fragment } from "react";
import Image from "next/image";

import Canvas from "./Canvas";
import { m } from "framer-motion";

const Intro: React.FC = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

      <div className="flex flex-row flex-wrap gap-4 pb-2 justify-center items-center">
        <m.p
          data-scroll
          data-scroll-speed="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="text-6xl text-center z-[1] text-blue-400"
        >
          {`Baskaran`}
        </m.p>
        <m.p
          data-scroll
          data-scroll-speed="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="text-6xl text-center z-[1] text-blue-400 "
        >
          {`Balaganesan`}
        </m.p>
      </div>

      <div className="flex flex-row flex-wrap gap-4  justify-center items-center">
        <m.p
          data-scroll
          data-scroll-speed="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="text-2xl text-center z-[1] overflow-hidden"
        >
          {`Full Stack Developer`}
        </m.p>
        <m.p
          data-scroll
          data-scroll-speed="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="text-2xl text-center text-gray-400 hidden md:block"
        >
          {`|`}
        </m.p>
        <m.p
          data-scroll
          data-scroll-speed="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="text-2xl text-center z-[1] overflow-hidden"
        >
          {`Technical Architect`}
        </m.p>
      </div>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#about"
        data-scroll-to
      >
        <Image
          className="animate-bounce pb-4"
          alt="A"
          src="/chevron-down.svg"
          width={56}
          height={56}
        />
      </m.a>
    </div>
  );
};

export default Intro;
