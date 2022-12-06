import React from "react";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
      {title}
    </h1>
  );
};

const SubTitle: React.FC<TitleProps> = ({ title }) => {
  return (
    <div data-scroll data-scroll-speed="0.5" className="text-2xl">
      {title}
    </div>
  );
};

export { Title, SubTitle };
