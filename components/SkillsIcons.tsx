import { FC } from "react";

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
    image: "/skills/nest.svg",
    title: "Nest",
  },
  {
    image: "/skills/python.svg",
    title: "python",
  },
  {
    image: "/skills/csharp.svg",
    title: "C#",
  },
  {
    image: "/skills/git.svg",
    title: "Git",
  },
  {
    image: "/skills/docker.svg",
    title: "Docker",
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
          <a
            key={skill.title}
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt=""
            />
            <p className="text-center">{skill.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillsIcon;
