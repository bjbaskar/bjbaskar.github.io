import { useRef } from "react";
import type { NextPage } from "next";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Container from "../components/Container";
import Intro from "../components/Intro";
import SkillsIcon from "../components/SkillsIcons";
import Aboutme from "../components/aboutme";
import KuralCard from "../components/KuralCard";

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Container>
          <Intro />
          <Aboutme />
          <SkillsIcon />
          <KuralCard />
        </Container>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
