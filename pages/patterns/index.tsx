import React from "react";

import Container from "../../components/Container";
import PatternIntro from "../../components/patterns/introduction";
import PatternsTOC from "../../components/patterns";

const PatternsMain: React.FC = () => {
  return (
    <Container>
      <div className="h-[100px]" />

      <div className="flex flex-row flex-grow">
        <PatternsTOC />

        <div className="flex flex-col px-8 w-full">
          <PatternIntro />
        </div>
      </div>

      <div className="h-[100px]" />
    </Container>
  );
};

export default PatternsMain;
