import React from "react";
import Container from "../../components/Container";
import PatternsTOC from "../../components/patterns";
import ChooseLanguage from "./ChooseLang";

interface IShowcodeContainerProps {
  children: React.ReactNode;
}

const ShowCodeContainer: React.FC<IShowcodeContainerProps> = ({ children }) => {
  return (
    <Container>
      <div className="h-[100px]" />

      <div className="flex flex-row">
        <PatternsTOC />

        <div className="flex flex-col mx-8 w-full">
          <ChooseLanguage />

          <div
            className="flex flex-col w-full overflow-x-auto mt-4
            border-dotted border-2 border-slate-200 dark:border-slate-700"
          >
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShowCodeContainer;
