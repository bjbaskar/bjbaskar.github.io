import { FC } from "react";
import Image from "next/image";

interface SkillsProps {
  image: string;
  title: string;
}

const skillsData: Array<SkillsProps> = [
  {
    image: "/skills/react.svg",
    title: "React",
  },
  {
    image: "/skills/typescript.svg",
    title: "Typescript",
  },
  {
    image: "/skills/next.svg",
    title: "Next",
  },
  {
    image: "/skills/redux-store.svg",
    title: "Redux",
  },
  {
    image: "/skills/nodejs.svg",
    title: "Nodejs",
  },
  {
    image: "/skills/graphql.svg",
    title: "GraphQL",
  },
  {
    image: "/skills/apollo.svg",
    title: "Apollo-Graphql",
  },

  {
    image: "/skills/tailwindcss.svg",
    title: "Tailwindcss",
  },
  {
    image: "/skills/mui.svg",
    title: "MaterialUI",
  },
  {
    image: "/skills/python.svg",
    title: "Python",
  },
  {
    image: "/skills/fastapi.svg",
    title: "FastAPI",
  },
  {
    image: "/skills/csharp.svg",
    title: "C#",
  },
  {
    image: "/skills/database.svg",
    title: "MySQL",
  },

  {
    image: "/skills/git.svg",
    title: "Git",
  },
  {
    image: "/skills/docker.svg",
    title: "Docker",
  },
  {
    image: "/skills/android.svg",
    title: "Android & iOS Apps",
  },
  {
    image: "/skills/jenkins.svg",
    title: "CI/CD Jenkins",
  },
  {
    image: "/skills/ubuntu.svg",
    title: "DevOps",
  },
];

const SkillsIcon: FC = () => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        My Technical Expertise
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-md text-center my-[30px]"
      >
        Technologies and languages that I use to make my product everyday
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
        {skillsData.map((skill) => (
          <div
            key={skill.title}
            className="item flex flex-col items-center justify-around group cursor-pointer"
          >
            <Image
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt=""
              width={60}
              height={60}
            />
            <p className="text-center">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsIcon;
