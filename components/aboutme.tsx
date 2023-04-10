import React from "react";
import Image from "next/image";

const Aboutme: React.FC = () => {
  return (
    <div
      id="about"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] 
            items-start justify-center flex-col md:flex-row pt-4"
    >
      <Image
        data-scroll
        data-scroll-speed="-5"
        className="w-[225px] h-[260px] md:w-[225px] md:h-[225px] rounded-xl self-center
        md:self-start"
        src="/bjbaskar1.jpg"
        alt="bjbaskar"
        width={225}
        height={225}
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

        <div className="flex flex-row flex-wrap mt-4 text-lg ">
          <div className="news-paragraph">
            <p data-scroll className="mt-4">
            Hello! My name is <span className="text-2xl">Baskaran</span>, and I am a software developer with more than 20+ years of experience. Currently based in <strong>Singapore</strong>, I completed my master&apos;s degree in computer applications from MK University in India.
            </p>
          </div>

          <div className="news-paragraph">
            <p>
            I have a strong passion for web and mobile development and am self-motivated, results-oriented, and an excellent individual contributor. I have extensive experience working in distributed teams and understand the nuances of working in complex organizations.
            </p>
          </div>

          <div className="news-paragraph">
            <p className="
                      first-letter:text-4xl 
                      first-letter:font-bold 
                      first-letter:text-gray-900 
                      first-letter:mr-1 
                      first-letter:float-left
                      dark:first-letter:text-gray-100">
            Over the years, I have had the opportunity to work with various organizations like Standard Chartered Bank, Deutsche Bank (HCL), Bank of America, and several IT firms, which have been instrumental in honing my skills. Through these experiences, I have learned a lot and met some very helpful people in the industry.
            </p>
          </div>

          <div className="news-paragraph">
            <p>
            With a proven track record of many successful projects, I have played multiple roles such as full-stack web developer, frontend developer, backend developer, technical architect, and more. This has enabled me to develop a unique set of skills that enables me to deliver a high-quality product while managing complex challenges effectively.
            </p>
          </div>

          <div className="news-paragraph">
            <p className="
                      first-letter:text-4xl 
                      first-letter:font-bold 
                      first-letter:text-gray-900 
                      first-letter:mr-1 
                      first-letter:float-left
                      dark:first-letter:text-gray-100">
            As a software developer, I am passionate about creating innovative solutions to solve complex problems. I am constantly seeking to expand my skill set and keep up with the latest trends and technologies. If you are looking for a dedicated and experienced software developer to join your team or collaborate on a project, I would love to hear from you!
            </p>
          </div>

        </div>

        {/* <p data-scroll className="text-lg tracking-wide mt-4">
          I am a software developer with 20+ years of experience and live in{" "}
          <strong>Singapore</strong>. <br />
          <br />I have a <strong>
            Masters degree in Computer Application
          </strong>{" "}
          from MK University, India
          <br />
          <br />Self motivated and result oriented professional having a
          strong passion for <strong>Web & Mobile development</strong> and also
          an excellent individual contributor.
          <br />
          <br />
          Extensive experience working in distributed teams and
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
        </p> */}
      </div>
    </div>
  );
};

export default Aboutme;
