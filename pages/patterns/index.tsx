import React from "react";
import Container from "../../components/Container";
import Patterns from "../../components/patterns";
import { Title } from "../../components/Title";

const PatternsPage: React.FC = () => {
  return (
    <Container>
      <div className="h-[100px]" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col px-8 w-full space-y-8">
          <Title title={`Design Patterns`} />

          <p className="w-full mx-auto p-4 mt-8">
            My favourite Programming language is TypeScript, JavaScript & C#.
            And my reason is that you can use it to create{" "}
            <b>Website, Mobile app</b> and now in IoT.
            <br />
            <br />
            Everyone likes music, even if it is just listening to music. There
            is always a playlist of songs which helps in refreshing our mind. It
            is the kind of a hobby I can do along with the{" "}
            <b>patterns & best practices, clean & resuable code</b> as like I
            listen to music while cooking, exercising, while cycling etc.
            <br />
            <br />
            I have listed down a few patterns that I implemented in my previous
            projects
            <br />
            <br />
            <b>Design patterns</b> are typical solutions to commonly occurring
            problems in software design. The patterns are not a specific piece
            of code, but a general concept for solving a particular problem.
            Below are the mostly used patterns with working code snippets.
            <br />
            <br />
            Here’s a quick cheat sheet with code snippets for lots of design
            patterns.
            <br />
            <br />
          </p>
        </div>

        <div className="flex flex-col px-8 w-full">
          <Patterns />
        </div>
      </div>
    </Container>
  );
};

export default PatternsPage;
