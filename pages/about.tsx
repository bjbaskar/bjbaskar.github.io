import React from "react";
import Aboutme from "../components/aboutme";
import Container from "../components/Container";

const About: React.FC = () => {
  return (
    <Container>
      <div className="h-[100px]" />
      <Aboutme />
    </Container>
  );
};

export default About;
