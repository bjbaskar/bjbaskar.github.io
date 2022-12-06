import React from "react";
import Container from "../components/Container";
import Timeline from "../components/Timeline";
import { Title } from "../components/Title";

const WorkHistory: React.FC = () => {
  return (
    <Container>
      <div className="h-[100px]" />
      <div className="flex self-start px-8">
        <Title title="Work History" />
      </div>
      <div className="md:max-w-md mx-auto">
        <Timeline />
      </div>
    </Container>
  );
};

export default WorkHistory;
