import React from "react";
import Container from "../Container";
import { Title } from "../Title";

const PatternIntro: React.FC = () => {
  return (
    <div className="flex flex-col px-8 w-full space-y-8">
      <Title title={`Design Patterns`} />

      <p className="w-full mx-auto p-4 mt-8">
        I favor TypeScript, JavaScript, and Python as my programming languages
        of choice. Their appeal stems from their versatility, enabling me to
        develop applications across a spectrum that includes
        <b> eCommerce Websites, Financial Web Apps, Mobile Apps</b>, and the
        ever-expanding field of IoT.
        <br />
        <br />
        Exploring design patterns is like finding a treasure chest in the world
        of making computer programs. Design patterns are more than just
        solutions to certain coding problems; they are proven and smart ways to
        deal with common challenges in creating software. Design patterns give
        developers a common language to talk about solutions and work together
        effectively.
        <br />
        <br />
        I have listed down some patterns that I integrated into my previous
        projects.
        <br />
        <br />
        In this adventure, we will explore the interesting world of design
        patterns. We will learn why they are important and how they go beyond
        just writing single lines of code.
        <br />
        <br />
        Understanding these patterns will not only make you better at solving
        problems but also improve your skill in creating software that can grow,
        change, and stay easy to manage. Come with me on this journey as we
        uncover the secrets of design patterns, discovering the mix of art and
        science that goes into making software that lasts.
        <br />
        <br />
      </p>
    </div>
  );
};

export default PatternIntro;
