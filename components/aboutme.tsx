import React from "react";

const Aboutme: React.FC = () => {
  return (
    <div
      id="about"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] 
            items-start justify-center flex-col md:flex-row pt-4"
    >
      <img
        data-scroll
        data-scroll-speed="-5"
        className="w-[225px] h-[225px] rounded-2xl"
        src="/bjbaskar1.jpg"
        alt="bjbaskar"
      />

      <div>
        <p
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          className="text-md font-normal mt-2"
        >
          <span className="text-indigo-600">Full Stack Developer</span>
          {" | "}
          <span className="text-green-400">Technical Architect</span>
        </p>

        <p data-scroll className="text-lg tracking-wide mt-4">
          I am a software developer with 20+ years of experience and live in{" "}
          <strong>Singapore</strong>. <br />
          <br />I have a <strong>
            Masters degree in Computer Application
          </strong>{" "}
          from MK University, India
          <br />
          <br />I am a self motivated and result oriented professional. I have a
          strong passion for <strong>Web & Mobile development</strong> and also
          an excellent individual contributor.
          <br />
          <br />
          I also have extensive experience working in distributed teams and
          understand various nuances of working in complex organisations.
          <br />
          <br />
          My experience includes working with <b>
            Standard Chartered Bank
          </b> , <b>Deutsche Bank</b> (HCL), Bank of America and several IT
          companies. I gained a lot of knowledge in the process, and met some
          very supportive people in the industry. I have a proven track record
          of many successful projects, playing multiple roles such as full stack
          web developer, Frontend developer, Backend developer, Technical
          Architect .....
          <br />
          <br />
          As a result, I have combined skills that enable me to execute diverse
          projects, delivering a quality product and effectively manage complex
          challenges.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
