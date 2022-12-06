import React from "react";

import Container from "../components/Container";
import SocialLink from "../components/SocialLink";
import { Title } from "../components/Title";
import Carousel from "../components/Carousel";

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="h-[100px]" />
      <div className="w-full mx-auto px-8">
        <Title title={`Contact me`} />
        <SocialLink />

        <div className="flex items-center justify-center px-4 pb-16">
          <Carousel />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
