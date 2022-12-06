import React from "react";
import Container from "../../components/Container";
import Patterns from "../../components/patterns";
import { SubTitle } from "../../components/Title";

interface IShowcodeContainerProps {
  children: React.ReactNode;
}

const ShowCodeContainer: React.FC<IShowcodeContainerProps> = ({ children }) => {
  return (
    <Container>
      <div className="h-[100px]" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 pt-2">
        <div className="flex flex-col px-8 w-full space-y-8">
          <SubTitle title={`Design Patterns`} />

          <Patterns />
        </div>

        <div
          className="flex flex-col px-8 w-full overflow-x-auto
         border-dotted border-2 border-slate-200 dark:border-slate-700"
        >
          {children}
        </div>
      </div>
    </Container>
  );
};

export default ShowCodeContainer;
