import React, { useEffect } from "react";
// import { useRouter } from "next/router";

import Container from "../../components/Container";
import PatternsTOC from "../../components/patterns";
import ChooseLanguage from "./ChooseLang";

interface IShowcodeContainerProps {
  children: React.ReactNode;
}

const ShowCodeContainer: React.FC<IShowcodeContainerProps> = ({ children }) => {
  // const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <Container>
      <div className="h-[100px]" id="chooseLanguage" />

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-64">
          <PatternsTOC />
        </div>

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
